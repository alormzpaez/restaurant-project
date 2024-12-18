<?php

namespace App\Http\Controllers;

use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\InventoryGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InventoryGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $bigPizza = Dish::where('name', 'Pizza grande')->first();
        $smallPizza = Dish::where('name', 'Pizza chica')->first();
        $hamburguer = Dish::where('name', 'Hamburguesa')->first();
        $baguette = Dish::where('name', 'Baguette')->first();

        $kitchenInventoryGroups = InventoryGroup::where('type', InventoryGroup::KITCHEN_TYPE)
            ->with('inventoryItems')
            ->orderBy('date')
            ->get();
        $pizzaInventoryGroups = InventoryGroup::where('type', InventoryGroup::PIZZA_TYPE)
            ->with('inventoryItems')
            ->orderBy('date')
            ->get();

        return Inertia::render("InventoryGroups/Index", [
            'kitchenInventoryGroups' => $kitchenInventoryGroups->map(function ($inventoryGroup) use ($hamburguer, $baguette) {
                $hamburgerSoldQuantity = $inventoryGroup
                    ->inventoryItems
                    ->where('inventory_itemable_id', $hamburguer->id)
                    ->sum('sold_quantity');

                $baguetteSoldQuantity = $inventoryGroup
                    ->inventoryItems
                    ->where('inventory_itemable_id', $baguette->id)
                    ->sum('sold_quantity');

                return [
                    'id' => $inventoryGroup->id,
                    'date' => $inventoryGroup->date,
                    'hamburger_sold_quantity' => $hamburgerSoldQuantity,
                    'baguette_sold_quantity' => $baguetteSoldQuantity
                ];
            }),
            'pizzaInventoryGroups' => $pizzaInventoryGroups->map(function ($inventoryGroup) use ($bigPizza, $smallPizza) {
                $bigPizzaSoldQuantity = $inventoryGroup
                    ->inventoryItems
                    ->where('inventory_itemable_id', $bigPizza->id)
                    ->sum('sold_quantity');

                $smallPizzaSoldQuantity = $inventoryGroup
                    ->inventoryItems
                    ->where('inventory_itemable_id', $smallPizza->id)
                    ->sum('sold_quantity');

                return [
                    'id' => $inventoryGroup->id,
                    'date' => $inventoryGroup->date,
                    'big_pizza_sold_quantity' => $bigPizzaSoldQuantity,
                    'small_pizza_sold_quantity' => $smallPizzaSoldQuantity
                ];
            })
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        // dd($request['query']);

        return Inertia::render('InventoryGroups/Create', [
            'query' => $request->query()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        if ($request['type'] == InventoryGroup::PIZZA_TYPE) {
            $bigPizza = Dish::where('name', 'Pizza grande')->first();
            $smallPizza = Dish::where('name', 'Pizza chica')->first();

            $inventoryGroup = InventoryGroup::create([
                'type' => InventoryGroup::PIZZA_TYPE,
                'date' => $request['date'],
            ]);

            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Dish::class,
                'inventory_itemable_id' => $bigPizza->id,
                'remaining_quantity' => $request['big_pizza_remaining_quantity'],
                'made_quantity' => $request['big_pizza_made_quantity'],
                'useful_quantity' => $request['big_pizza_useful_quantity'],
                'sold_quantity' => $request['big_pizza_sold_quantity'],
            ]);

            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Dish::class,
                'inventory_itemable_id' => $smallPizza->id,
                'remaining_quantity' => $request['small_pizza_remaining_quantity'],
                'made_quantity' => $request['small_pizza_made_quantity'],
                'useful_quantity' => $request['small_pizza_useful_quantity'],
                'sold_quantity' => $request['small_pizza_sold_quantity'],
            ]);

            return to_route('inventory-groups.show', $inventoryGroup->id);
        } else {
            // Buscar los platos
            $hamburguer = Dish::where('name', 'Hamburguesa')->first();
            $baguette = Dish::where('name', 'Baguette')->first();
            $pasta = Dish::where('name', 'Pasta')->first();
            $salad = Dish::where('name', 'Ensalada')->first();
            $quesoFundido = Dish::where('name', 'Queso fundido')->first();
            $alambre = Dish::where('name', 'Alambre')->first();
            $corte = Dish::where('name', 'Corte')->first();
            $mollete = Dish::where('name', 'Mollete')->first();

            // Buscar los ingredientes
            $arrachera = Ingredient::where('name', 'Arrachera')->first();
            $pollo = Ingredient::where('name', 'Pollo')->first();
            $chistorra = Ingredient::where('name', 'Chistorra')->first();
            $panHamburguesa = Ingredient::where('name', 'Pan Hambs.')->first();
            $panBaguette = Ingredient::where('name', 'Pan Bags.')->first();
            $papas = Ingredient::where('name', 'Papas')->first();
            $chuleta = Ingredient::where('name', 'Chuleta')->first();
            $molida = Ingredient::where('name', 'Molida')->first();
            $asada = Ingredient::where('name', 'Asada')->first();
            $pastor = Ingredient::where('name', 'Pastor')->first();
            $fettuccine = Ingredient::where('name', 'Fettuccine')->first();
            $carneH = Ingredient::where('name', 'Carne hambs.')->first();

            $inventoryGroup = InventoryGroup::create([
                'type' => InventoryGroup::KITCHEN_TYPE,
                'date' => $request['date'],
            ]);

            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Dish::class,
                'inventory_itemable_id' => $hamburguer->id,
                'sold_quantity' => $request['hamburger_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Dish::class,
                'inventory_itemable_id' => $baguette->id,
                'sold_quantity' => $request['baguette_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Dish::class,
                'inventory_itemable_id' => $pasta->id,
                'sold_quantity' => $request['pasta_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Dish::class,
                'inventory_itemable_id' => $salad->id,
                'sold_quantity' => $request['salad_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Dish::class,
                'inventory_itemable_id' => $quesoFundido->id,
                'sold_quantity' => $request['quesoFundido_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Dish::class,
                'inventory_itemable_id' => $alambre->id,
                'sold_quantity' => $request['alambre_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Dish::class,
                'inventory_itemable_id' => $corte->id,
                'sold_quantity' => $request['corte_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Dish::class,
                'inventory_itemable_id' => $mollete->id,
                'sold_quantity' => $request['mollete_sold_quantity'],
            ]);

            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Ingredient::class,
                'inventory_itemable_id' => $arrachera->id,
                'remaining_quantity' => $request['arrachera_remaining_quantity'],
                'made_quantity' => $request['arrachera_made_quantity'],
                'useful_quantity' => $request['arrachera_useful_quantity'],
                'sold_quantity' => $request['arrachera_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Ingredient::class,
                'inventory_itemable_id' => $pollo->id,
                'remaining_quantity' => $request['pollo_remaining_quantity'],
                'made_quantity' => $request['pollo_made_quantity'],
                'useful_quantity' => $request['pollo_useful_quantity'],
                'sold_quantity' => $request['pollo_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Ingredient::class,
                'inventory_itemable_id' => $chistorra->id,
                'remaining_quantity' => $request['chistorra_remaining_quantity'],
                'made_quantity' => $request['chistorra_made_quantity'],
                'useful_quantity' => $request['chistorra_useful_quantity'],
                'sold_quantity' => $request['chistorra_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Ingredient::class,
                'inventory_itemable_id' => $panHamburguesa->id,
                'remaining_quantity' => $request['panHams_remaining_quantity'],
                'made_quantity' => $request['panHams_made_quantity'],
                'useful_quantity' => $request['panHams_useful_quantity'],
                'sold_quantity' => $request['panHams_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Ingredient::class,
                'inventory_itemable_id' => $panBaguette->id,
                'remaining_quantity' => $request['panBags_remaining_quantity'],
                'made_quantity' => $request['panBags_made_quantity'],
                'useful_quantity' => $request['panBags_useful_quantity'],
                'sold_quantity' => $request['panBags_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Ingredient::class,
                'inventory_itemable_id' => $papas->id,
                'remaining_quantity' => $request['papas_remaining_quantity'],
                'made_quantity' => $request['papas_made_quantity'],
                'useful_quantity' => $request['papas_useful_quantity'],
                'sold_quantity' => $request['papas_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Ingredient::class,
                'inventory_itemable_id' => $chuleta->id,
                'remaining_quantity' => $request['chuleta_remaining_quantity'],
                'made_quantity' => $request['chuleta_made_quantity'],
                'useful_quantity' => $request['chuleta_useful_quantity'],
                'sold_quantity' => $request['chuleta_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Ingredient::class,
                'inventory_itemable_id' => $molida->id,
                'remaining_quantity' => $request['molida_remaining_quantity'],
                'made_quantity' => $request['molida_made_quantity'],
                'useful_quantity' => $request['molida_useful_quantity'],
                'sold_quantity' => $request['molida_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Ingredient::class,
                'inventory_itemable_id' => $asada->id,
                'remaining_quantity' => $request['asada_remaining_quantity'],
                'made_quantity' => $request['asada_made_quantity'],
                'useful_quantity' => $request['asada_useful_quantity'],
                'sold_quantity' => $request['asada_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Ingredient::class,
                'inventory_itemable_id' => $pastor->id,
                'remaining_quantity' => $request['pastor_remaining_quantity'],
                'made_quantity' => $request['pastor_made_quantity'],
                'useful_quantity' => $request['pastor_useful_quantity'],
                'sold_quantity' => $request['pastor_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Ingredient::class,
                'inventory_itemable_id' => $fettuccine->id,
                'remaining_quantity' => $request['fettuccine_remaining_quantity'],
                'made_quantity' => $request['fettuccine_made_quantity'],
                'useful_quantity' => $request['fettuccine_useful_quantity'],
                'sold_quantity' => $request['fettuccine_sold_quantity'],
            ]);
            $inventoryGroup->inventoryItems()->create([
                'inventory_itemable_type' => Ingredient::class,
                'inventory_itemable_id' => $carneH->id,
                'remaining_quantity' => $request['carneHamb_remaining_quantity'],
                'made_quantity' => $request['carneHamb_made_quantity'],
                'useful_quantity' => $request['carneHamb_useful_quantity'],
                'sold_quantity' => $request['carneHamb_sold_quantity'],
            ]);

            return to_route('inventory-groups.show', $inventoryGroup->id);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(InventoryGroup $inventoryGroup)
    {
        $inventoryGroupArray = [];

        if ($inventoryGroup->type == InventoryGroup::PIZZA_TYPE) {
            $bigPizza = Dish::where('name', 'Pizza grande')->first();
            $smallPizza = Dish::where('name', 'Pizza chica')->first();

            $bigPizzaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_id', $bigPizza->id)->first();
            $smallPizzaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_id', $smallPizza->id)->first();

            $inventoryGroupArray = [
                'id' => $inventoryGroup->id,
                'type' => $inventoryGroup->type,
                'date' => $inventoryGroup->date,
                'big_pizza_remaining_quantity' => $bigPizzaItem ? $bigPizzaItem->remaining_quantity : null,
                'big_pizza_made_quantity' => $bigPizzaItem ? $bigPizzaItem->made_quantity : null,
                'big_pizza_useful_quantity' => $bigPizzaItem ? $bigPizzaItem->useful_quantity : null,
                'big_pizza_sold_quantity' => $bigPizzaItem ? $bigPizzaItem->sold_quantity : null,
                'small_pizza_remaining_quantity' => $smallPizzaItem ? $smallPizzaItem->remaining_quantity : null,
                'small_pizza_made_quantity' => $smallPizzaItem ? $smallPizzaItem->made_quantity : null,
                'small_pizza_useful_quantity' => $smallPizzaItem ? $smallPizzaItem->useful_quantity : null,
                'small_pizza_sold_quantity' => $smallPizzaItem ? $smallPizzaItem->sold_quantity : null,
            ];
        } else {
            // Buscar los platos
            $hamburguer = Dish::where('name', 'Hamburguesa')->first();
            $baguette = Dish::where('name', 'Baguette')->first();
            $pasta = Dish::where('name', 'Pasta')->first();
            $salad = Dish::where('name', 'Ensalada')->first();
            $quesoFundido = Dish::where('name', 'Queso fundido')->first();
            $alambre = Dish::where('name', 'Alambre')->first();
            $corte = Dish::where('name', 'Corte')->first();
            $mollete = Dish::where('name', 'Mollete')->first();

            // Buscar los ingredientes
            $arrachera = Ingredient::where('name', 'Arrachera')->first();
            $pollo = Ingredient::where('name', 'Pollo')->first();
            $chistorra = Ingredient::where('name', 'Chistorra')->first();
            $panHamburguesa = Ingredient::where('name', 'Pan Hambs.')->first();
            $panBaguette = Ingredient::where('name', 'Pan Bags.')->first();
            $papas = Ingredient::where('name', 'Papas')->first();
            $chuleta = Ingredient::where('name', 'Chuleta')->first();
            $molida = Ingredient::where('name', 'Molida')->first();
            $asada = Ingredient::where('name', 'Asada')->first();
            $pastor = Ingredient::where('name', 'Pastor')->first();
            $fettuccine = Ingredient::where('name', 'Fettuccine')->first();
            $carneH = Ingredient::where('name', 'Carne hambs.')->first();

            // Obtener los items del inventario
            $hamburguerItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $hamburguer->id)->first();
            $baguetteItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $baguette->id)->first();
            $pastaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $pasta->id)->first();
            $saladItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $salad->id)->first();
            $quesoFundidoItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $quesoFundido->id)->first();
            $alambreItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $alambre->id)->first();
            $corteItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $corte->id)->first();
            $molleteItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $mollete->id)->first();

            // Obtener los items de los ingredientes
            $arracheraItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $arrachera->id)->first();
            $polloItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $pollo->id)->first();
            $chistorraItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $chistorra->id)->first();
            $panHamburguesaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $panHamburguesa->id)->first();
            $panBaguetteItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $panBaguette->id)->first();
            $papasItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $papas->id)->first();
            $chuletaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $chuleta->id)->first();
            $molidaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $molida->id)->first();
            $asadaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $asada->id)->first();
            $pastorItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $pastor->id)->first();
            $fettuccineItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $fettuccine->id)->first();
            $carneHItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $carneH->id)->first();

            $inventoryGroupArray = [
                'id' => $inventoryGroup->id,
                'type' => $inventoryGroup->type,
                'date' => $inventoryGroup->date,
                'hamburger_sold_quantity' => $hamburguerItem ? $hamburguerItem->sold_quantity : null,
                'baguette_sold_quantity' => $baguetteItem ? $baguetteItem->sold_quantity : null,
                'pasta_sold_quantity' => $pastaItem ? $pastaItem->sold_quantity : null,
                'salad_sold_quantity' => $saladItem ? $saladItem->sold_quantity : null,
                'quesoFundido_sold_quantity' => $quesoFundidoItem ? $quesoFundidoItem->sold_quantity : null,
                'alambre_sold_quantity' => $alambreItem ? $alambreItem->sold_quantity : null,
                'corte_sold_quantity' => $corteItem ? $corteItem->sold_quantity : null,
                'mollete_sold_quantity' => $molleteItem ? $molleteItem->sold_quantity : null,
                'arrachera_remaining_quantity' => $arracheraItem ? $arracheraItem->remaining_quantity : null,
                'arrachera_made_quantity' => $arracheraItem ? $arracheraItem->made_quantity : null,
                'arrachera_useful_quantity' => $arracheraItem ? $arracheraItem->useful_quantity : null,
                'arrachera_sold_quantity' => $arracheraItem ? $arracheraItem->sold_quantity : null,
                'pollo_remaining_quantity' => $polloItem ? $polloItem->remaining_quantity : null,
                'pollo_made_quantity' => $polloItem ? $polloItem->made_quantity : null,
                'pollo_useful_quantity' => $polloItem ? $polloItem->useful_quantity : null,
                'pollo_sold_quantity' => $polloItem ? $polloItem->sold_quantity : null,
                'chistorra_remaining_quantity' => $chistorraItem ? $chistorraItem->remaining_quantity : null,
                'chistorra_made_quantity' => $chistorraItem ? $chistorraItem->made_quantity : null,
                'chistorra_useful_quantity' => $chistorraItem ? $chistorraItem->useful_quantity : null,
                'chistorra_sold_quantity' => $chistorraItem ? $chistorraItem->sold_quantity : null,
                'panHams_remaining_quantity' => $panHamburguesaItem ? $panHamburguesaItem->remaining_quantity : null,
                'panHams_made_quantity' => $panHamburguesaItem ? $panHamburguesaItem->made_quantity : null,
                'panHams_useful_quantity' => $panHamburguesaItem ? $panHamburguesaItem->useful_quantity : null,
                'panHams_sold_quantity' => $panHamburguesaItem ? $panHamburguesaItem->sold_quantity : null,
                'panBags_remaining_quantity' => $panBaguetteItem ? $panBaguetteItem->remaining_quantity : null,
                'panBags_made_quantity' => $panBaguetteItem ? $panBaguetteItem->made_quantity : null,
                'panBags_useful_quantity' => $panBaguetteItem ? $panBaguetteItem->useful_quantity : null,
                'panBags_sold_quantity' => $panBaguetteItem ? $panBaguetteItem->sold_quantity : null,
                'papas_remaining_quantity' => $papasItem ? $papasItem->remaining_quantity : null,
                'papas_made_quantity' => $papasItem ? $papasItem->made_quantity : null,
                'papas_useful_quantity' => $papasItem ? $papasItem->useful_quantity : null,
                'papas_sold_quantity' => $papasItem ? $papasItem->sold_quantity : null,
                'chuleta_remaining_quantity' => $chuletaItem ? $chuletaItem->remaining_quantity : null,
                'chuleta_made_quantity' => $chuletaItem ? $chuletaItem->made_quantity : null,
                'chuleta_useful_quantity' => $chuletaItem ? $chuletaItem->useful_quantity : null,
                'chuleta_sold_quantity' => $chuletaItem ? $chuletaItem->sold_quantity : null,
                'molida_remaining_quantity' => $molidaItem ? $molidaItem->remaining_quantity : null,
                'molida_made_quantity' => $molidaItem ? $molidaItem->made_quantity : null,
                'molida_useful_quantity' => $molidaItem ? $molidaItem->useful_quantity : null,
                'molida_sold_quantity' => $molidaItem ? $molidaItem->sold_quantity : null,
                'asada_remaining_quantity' => $asadaItem ? $asadaItem->remaining_quantity : null,
                'asada_made_quantity' => $asadaItem ? $asadaItem->made_quantity : null,
                'asada_useful_quantity' => $asadaItem ? $asadaItem->useful_quantity : null,
                'asada_sold_quantity' => $asadaItem ? $asadaItem->sold_quantity : null,
                'pastor_remaining_quantity' => $pastorItem ? $pastorItem->remaining_quantity : null,
                'pastor_made_quantity' => $pastorItem ? $pastorItem->made_quantity : null,
                'pastor_useful_quantity' => $pastorItem ? $pastorItem->useful_quantity : null,
                'pastor_sold_quantity' => $pastorItem ? $pastorItem->sold_quantity : null,
                'fettuccine_remaining_quantity' => $fettuccineItem ? $fettuccineItem->remaining_quantity : null,
                'fettuccine_made_quantity' => $fettuccineItem ? $fettuccineItem->made_quantity : null,
                'fettuccine_useful_quantity' => $fettuccineItem ? $fettuccineItem->useful_quantity : null,
                'fettuccine_sold_quantity' => $fettuccineItem ? $fettuccineItem->sold_quantity : null,
                'carneHamb_remaining_quantity' => $carneHItem ? $carneHItem->remaining_quantity : null,
                'carneHamb_made_quantity' => $carneHItem ? $carneHItem->made_quantity : null,
                'carneHamb_useful_quantity' => $carneHItem ? $carneHItem->useful_quantity : null,
                'carneHamb_sold_quantity' => $carneHItem ? $carneHItem->sold_quantity : null,
            ];
        }

        return Inertia::render("InventoryGroups/Show", [
            'inventoryGroup' => $inventoryGroupArray
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InventoryGroup $inventoryGroup)
    {
        $inventoryGroupArray = [];

        if ($inventoryGroup->type == InventoryGroup::PIZZA_TYPE) {
            $bigPizza = Dish::where('name', 'Pizza grande')->first();
            $smallPizza = Dish::where('name', 'Pizza chica')->first();

            $bigPizzaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_id', $bigPizza->id)->first();
            $smallPizzaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_id', $smallPizza->id)->first();

            $inventoryGroupArray = [
                'id' => $inventoryGroup->id,
                'type' => $inventoryGroup->type,
                'date' => $inventoryGroup->date,
                'big_pizza_remaining_quantity' => $bigPizzaItem ? $bigPizzaItem->remaining_quantity : null,
                'big_pizza_made_quantity' => $bigPizzaItem ? $bigPizzaItem->made_quantity : null,
                'big_pizza_useful_quantity' => $bigPizzaItem ? $bigPizzaItem->useful_quantity : null,
                'big_pizza_sold_quantity' => $bigPizzaItem ? $bigPizzaItem->sold_quantity : null,
                'small_pizza_remaining_quantity' => $smallPizzaItem ? $smallPizzaItem->remaining_quantity : null,
                'small_pizza_made_quantity' => $smallPizzaItem ? $smallPizzaItem->made_quantity : null,
                'small_pizza_useful_quantity' => $smallPizzaItem ? $smallPizzaItem->useful_quantity : null,
                'small_pizza_sold_quantity' => $smallPizzaItem ? $smallPizzaItem->sold_quantity : null,
            ];
        } else {
            // Buscar los platos
            $hamburguer = Dish::where('name', 'Hamburguesa')->first();
            $baguette = Dish::where('name', 'Baguette')->first();
            $pasta = Dish::where('name', 'Pasta')->first();
            $salad = Dish::where('name', 'Ensalada')->first();
            $quesoFundido = Dish::where('name', 'Queso fundido')->first();
            $alambre = Dish::where('name', 'Alambre')->first();
            $corte = Dish::where('name', 'Corte')->first();
            $mollete = Dish::where('name', 'Mollete')->first();

            // Buscar los ingredientes
            $arrachera = Ingredient::where('name', 'Arrachera')->first();
            $pollo = Ingredient::where('name', 'Pollo')->first();
            $chistorra = Ingredient::where('name', 'Chistorra')->first();
            $panHamburguesa = Ingredient::where('name', 'Pan Hambs.')->first();
            $panBaguette = Ingredient::where('name', 'Pan Bags.')->first();
            $papas = Ingredient::where('name', 'Papas')->first();
            $chuleta = Ingredient::where('name', 'Chuleta')->first();
            $molida = Ingredient::where('name', 'Molida')->first();
            $asada = Ingredient::where('name', 'Asada')->first();
            $pastor = Ingredient::where('name', 'Pastor')->first();
            $fettuccine = Ingredient::where('name', 'Fettuccine')->first();
            $carneH = Ingredient::where('name', 'Carne hambs.')->first();

            // Obtener los items del inventario
            $hamburguerItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $hamburguer->id)->first();
            $baguetteItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $baguette->id)->first();
            $pastaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $pasta->id)->first();
            $saladItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $salad->id)->first();
            $quesoFundidoItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $quesoFundido->id)->first();
            $alambreItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $alambre->id)->first();
            $corteItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $corte->id)->first();
            $molleteItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $mollete->id)->first();

            // Obtener los items de los ingredientes
            $arracheraItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $arrachera->id)->first();
            $polloItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $pollo->id)->first();
            $chistorraItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $chistorra->id)->first();
            $panHamburguesaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $panHamburguesa->id)->first();
            $panBaguetteItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $panBaguette->id)->first();
            $papasItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $papas->id)->first();
            $chuletaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $chuleta->id)->first();
            $molidaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $molida->id)->first();
            $asadaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $asada->id)->first();
            $pastorItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $pastor->id)->first();
            $fettuccineItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $fettuccine->id)->first();
            $carneHItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $carneH->id)->first();

            $inventoryGroupArray = [
                'id' => $inventoryGroup->id,
                'type' => $inventoryGroup->type,
                'date' => $inventoryGroup->date,
                'hamburger_sold_quantity' => $hamburguerItem ? $hamburguerItem->sold_quantity : null,
                'baguette_sold_quantity' => $baguetteItem ? $baguetteItem->sold_quantity : null,
                'pasta_sold_quantity' => $pastaItem ? $pastaItem->sold_quantity : null,
                'salad_sold_quantity' => $saladItem ? $saladItem->sold_quantity : null,
                'quesoFundido_sold_quantity' => $quesoFundidoItem ? $quesoFundidoItem->sold_quantity : null,
                'alambre_sold_quantity' => $alambreItem ? $alambreItem->sold_quantity : null,
                'corte_sold_quantity' => $corteItem ? $corteItem->sold_quantity : null,
                'mollete_sold_quantity' => $molleteItem ? $molleteItem->sold_quantity : null,
                'arrachera_remaining_quantity' => $arracheraItem ? $arracheraItem->remaining_quantity : null,
                'arrachera_made_quantity' => $arracheraItem ? $arracheraItem->made_quantity : null,
                'arrachera_useful_quantity' => $arracheraItem ? $arracheraItem->useful_quantity : null,
                'arrachera_sold_quantity' => $arracheraItem ? $arracheraItem->sold_quantity : null,
                'pollo_remaining_quantity' => $polloItem ? $polloItem->remaining_quantity : null,
                'pollo_made_quantity' => $polloItem ? $polloItem->made_quantity : null,
                'pollo_useful_quantity' => $polloItem ? $polloItem->useful_quantity : null,
                'pollo_sold_quantity' => $polloItem ? $polloItem->sold_quantity : null,
                'chistorra_remaining_quantity' => $chistorraItem ? $chistorraItem->remaining_quantity : null,
                'chistorra_made_quantity' => $chistorraItem ? $chistorraItem->made_quantity : null,
                'chistorra_useful_quantity' => $chistorraItem ? $chistorraItem->useful_quantity : null,
                'chistorra_sold_quantity' => $chistorraItem ? $chistorraItem->sold_quantity : null,
                'panHams_remaining_quantity' => $panHamburguesaItem ? $panHamburguesaItem->remaining_quantity : null,
                'panHams_made_quantity' => $panHamburguesaItem ? $panHamburguesaItem->made_quantity : null,
                'panHams_useful_quantity' => $panHamburguesaItem ? $panHamburguesaItem->useful_quantity : null,
                'panHams_sold_quantity' => $panHamburguesaItem ? $panHamburguesaItem->sold_quantity : null,
                'panBags_remaining_quantity' => $panBaguetteItem ? $panBaguetteItem->remaining_quantity : null,
                'panBags_made_quantity' => $panBaguetteItem ? $panBaguetteItem->made_quantity : null,
                'panBags_useful_quantity' => $panBaguetteItem ? $panBaguetteItem->useful_quantity : null,
                'panBags_sold_quantity' => $panBaguetteItem ? $panBaguetteItem->sold_quantity : null,
                'papas_remaining_quantity' => $papasItem ? $papasItem->remaining_quantity : null,
                'papas_made_quantity' => $papasItem ? $papasItem->made_quantity : null,
                'papas_useful_quantity' => $papasItem ? $papasItem->useful_quantity : null,
                'papas_sold_quantity' => $papasItem ? $papasItem->sold_quantity : null,
                'chuleta_remaining_quantity' => $chuletaItem ? $chuletaItem->remaining_quantity : null,
                'chuleta_made_quantity' => $chuletaItem ? $chuletaItem->made_quantity : null,
                'chuleta_useful_quantity' => $chuletaItem ? $chuletaItem->useful_quantity : null,
                'chuleta_sold_quantity' => $chuletaItem ? $chuletaItem->sold_quantity : null,
                'molida_remaining_quantity' => $molidaItem ? $molidaItem->remaining_quantity : null,
                'molida_made_quantity' => $molidaItem ? $molidaItem->made_quantity : null,
                'molida_useful_quantity' => $molidaItem ? $molidaItem->useful_quantity : null,
                'molida_sold_quantity' => $molidaItem ? $molidaItem->sold_quantity : null,
                'asada_remaining_quantity' => $asadaItem ? $asadaItem->remaining_quantity : null,
                'asada_made_quantity' => $asadaItem ? $asadaItem->made_quantity : null,
                'asada_useful_quantity' => $asadaItem ? $asadaItem->useful_quantity : null,
                'asada_sold_quantity' => $asadaItem ? $asadaItem->sold_quantity : null,
                'pastor_remaining_quantity' => $pastorItem ? $pastorItem->remaining_quantity : null,
                'pastor_made_quantity' => $pastorItem ? $pastorItem->made_quantity : null,
                'pastor_useful_quantity' => $pastorItem ? $pastorItem->useful_quantity : null,
                'pastor_sold_quantity' => $pastorItem ? $pastorItem->sold_quantity : null,
                'fettuccine_remaining_quantity' => $fettuccineItem ? $fettuccineItem->remaining_quantity : null,
                'fettuccine_made_quantity' => $fettuccineItem ? $fettuccineItem->made_quantity : null,
                'fettuccine_useful_quantity' => $fettuccineItem ? $fettuccineItem->useful_quantity : null,
                'fettuccine_sold_quantity' => $fettuccineItem ? $fettuccineItem->sold_quantity : null,
                'carneHamb_remaining_quantity' => $carneHItem ? $carneHItem->remaining_quantity : null,
                'carneHamb_made_quantity' => $carneHItem ? $carneHItem->made_quantity : null,
                'carneHamb_useful_quantity' => $carneHItem ? $carneHItem->useful_quantity : null,
                'carneHamb_sold_quantity' => $carneHItem ? $carneHItem->sold_quantity : null,
            ];
        }

        return Inertia::render("InventoryGroups/Edit", [
            'inventoryGroup' => $inventoryGroupArray
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InventoryGroup $inventoryGroup)
    {
        if ($inventoryGroup->type == InventoryGroup::PIZZA_TYPE) {
            $bigPizza = Dish::where('name', 'Pizza grande')->first();
            $smallPizza = Dish::where('name', 'Pizza chica')->first();

            $bigPizzaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_id', $bigPizza->id)->first();
            $smallPizzaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_id', $smallPizza->id)->first();

            $bigPizzaItem->update([
                'remaining_quantity' => $request['big_pizza_remaining_quantity'],
                'made_quantity' => $request['big_pizza_made_quantity'],
                'useful_quantity' => $request['big_pizza_useful_quantity'],
                'sold_quantity' => $request['big_pizza_sold_quantity'],
            ]);

            $smallPizzaItem->update([
                'remaining_quantity' => $request['small_pizza_remaining_quantity'],
                'made_quantity' => $request['small_pizza_made_quantity'],
                'useful_quantity' => $request['small_pizza_useful_quantity'],
                'sold_quantity' => $request['small_pizza_sold_quantity'],
            ]);
        } else {
            // Buscar los platos
            $hamburguer = Dish::where('name', 'Hamburguesa')->first();
            $baguette = Dish::where('name', 'Baguette')->first();
            $pasta = Dish::where('name', 'Pasta')->first();
            $salad = Dish::where('name', 'Ensalada')->first();
            $quesoFundido = Dish::where('name', 'Queso fundido')->first();
            $alambre = Dish::where('name', 'Alambre')->first();
            $corte = Dish::where('name', 'Corte')->first();
            $mollete = Dish::where('name', 'Mollete')->first();

            // Buscar los ingredientes
            $arrachera = Ingredient::where('name', 'Arrachera')->first();
            $pollo = Ingredient::where('name', 'Pollo')->first();
            $chistorra = Ingredient::where('name', 'Chistorra')->first();
            $panHamburguesa = Ingredient::where('name', 'Pan Hambs.')->first();
            $panBaguette = Ingredient::where('name', 'Pan Bags.')->first();
            $papas = Ingredient::where('name', 'Papas')->first();
            $chuleta = Ingredient::where('name', 'Chuleta')->first();
            $molida = Ingredient::where('name', 'Molida')->first();
            $asada = Ingredient::where('name', 'Asada')->first();
            $pastor = Ingredient::where('name', 'Pastor')->first();
            $fettuccine = Ingredient::where('name', 'Fettuccine')->first();
            $carneH = Ingredient::where('name', 'Carne hambs.')->first();

            // Obtener los items del inventario
            $hamburguerItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $hamburguer->id)->first();
            $baguetteItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $baguette->id)->first();
            $pastaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $pasta->id)->first();
            $saladItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $salad->id)->first();
            $quesoFundidoItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $quesoFundido->id)->first();
            $alambreItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $alambre->id)->first();
            $corteItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $corte->id)->first();
            $molleteItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Dish::class)->where('inventory_itemable_id', $mollete->id)->first();

            // Obtener los items de los ingredientes
            $arracheraItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $arrachera->id)->first();
            $polloItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $pollo->id)->first();
            $chistorraItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $chistorra->id)->first();
            $panHamburguesaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $panHamburguesa->id)->first();
            $panBaguetteItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $panBaguette->id)->first();
            $papasItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $papas->id)->first();
            $chuletaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $chuleta->id)->first();
            $molidaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $molida->id)->first();
            $asadaItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $asada->id)->first();
            $pastorItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $pastor->id)->first();
            $fettuccineItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $fettuccine->id)->first();
            $carneHItem = $inventoryGroup->inventoryItems->where('inventory_itemable_type', Ingredient::class)->where('inventory_itemable_id', $carneH->id)->first();

            $hamburguerItem?->update([
                'sold_quantity' => $request['hamburger_sold_quantity']
            ]);
            $baguetteItem?->update([
                'sold_quantity' => $request['baguette_sold_quantity']
            ]);
            $pastaItem?->update([
                'sold_quantity' => $request['pasta_sold_quantity']
            ]);
            $saladItem?->update([
                'sold_quantity' => $request['salad_sold_quantity']
            ]);
            $quesoFundidoItem?->update([
                'sold_quantity' => $request['quesoFundido_sold_quantity']
            ]);
            $alambreItem?->update([
                'sold_quantity' => $request['alambre_sold_quantity']
            ]);
            $corteItem?->update([
                'sold_quantity' => $request['corte_sold_quantity']
            ]);
            $molleteItem?->update([
                'sold_quantity' => $request['mollete_sold_quantity']
            ]);

            $arracheraItem?->update([
                'remaining_quantity' => $request['arrachera_remaining_quantity'],
                'made_quantity' => $request['arrachera_made_quantity'],
                'useful_quantity' => $request['arrachera_useful_quantity'],
                'sold_quantity' => $request['arrachera_sold_quantity']
            ]);
            $polloItem?->update([
                'remaining_quantity' => $request['pollo_remaining_quantity'],
                'made_quantity' => $request['pollo_made_quantity'],
                'useful_quantity' => $request['pollo_useful_quantity'],
                'sold_quantity' => $request['pollo_sold_quantity']
            ]);
            $chistorraItem?->update([
                'remaining_quantity' => $request['chistorra_remaining_quantity'],
                'made_quantity' => $request['chistorra_made_quantity'],
                'useful_quantity' => $request['chistorra_useful_quantity'],
                'sold_quantity' => $request['chistorra_sold_quantity']
            ]);
            $panHamburguesaItem?->update([
                'remaining_quantity' => $request['panHams_remaining_quantity'],
                'made_quantity' => $request['panHams_made_quantity'],
                'useful_quantity' => $request['panHams_useful_quantity'],
                'sold_quantity' => $request['panHams_sold_quantity']
            ]);
            $panBaguetteItem?->update([
                'remaining_quantity' => $request['panBags_remaining_quantity'],
                'made_quantity' => $request['panBags_made_quantity'],
                'useful_quantity' => $request['panBags_useful_quantity'],
                'sold_quantity' => $request['panBags_sold_quantity']
            ]);
            $papasItem?->update([
                'remaining_quantity' => $request['papas_remaining_quantity'],
                'made_quantity' => $request['papas_made_quantity'],
                'useful_quantity' => $request['papas_useful_quantity'],
                'sold_quantity' => $request['papas_sold_quantity']
            ]);
            $chuletaItem?->update([
                'remaining_quantity' => $request['chuleta_remaining_quantity'],
                'made_quantity' => $request['chuleta_made_quantity'],
                'useful_quantity' => $request['chuleta_useful_quantity'],
                'sold_quantity' => $request['chuleta_sold_quantity']
            ]);
            $molidaItem?->update([
                'remaining_quantity' => $request['molida_remaining_quantity'],
                'made_quantity' => $request['molida_made_quantity'],
                'useful_quantity' => $request['molida_useful_quantity'],
                'sold_quantity' => $request['molida_sold_quantity']
            ]);
            $asadaItem?->update([
                'remaining_quantity' => $request['asada_remaining_quantity'],
                'made_quantity' => $request['asada_made_quantity'],
                'useful_quantity' => $request['asada_useful_quantity'],
                'sold_quantity' => $request['asada_sold_quantity']
            ]);
            $pastorItem?->update([
                'remaining_quantity' => $request['pastor_remaining_quantity'],
                'made_quantity' => $request['pastor_made_quantity'],
                'useful_quantity' => $request['pastor_useful_quantity'],
                'sold_quantity' => $request['pastor_sold_quantity']
            ]);
            $fettuccineItem?->update([
                'remaining_quantity' => $request['fettuccine_remaining_quantity'],
                'made_quantity' => $request['fettuccine_made_quantity'],
                'useful_quantity' => $request['fettuccine_useful_quantity'],
                'sold_quantity' => $request['fettuccine_sold_quantity']
            ]);
            $carneHItem?->update([
                'remaining_quantity' => $request['carneHamb_remaining_quantity'],
                'made_quantity' => $request['carneHamb_made_quantity'],
                'useful_quantity' => $request['carneHamb_useful_quantity'],
                'sold_quantity' => $request['carneHamb_sold_quantity']
            ]);
        }

        return to_route('inventory-groups.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InventoryGroup $inventoryGroup)
    {
        $inventoryGroup->delete();

        return to_route('inventory-groups.index');
    }
}
