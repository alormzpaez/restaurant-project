<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\InventoryGroup;
use App\Models\InventoryItem;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class InventoryGroupControllerTest extends TestCase
{
    use RefreshDatabase;

    public string $url = '/inventory-groups';

    public function test_guest(): void
    {
        $inventoryGroup = InventoryGroup::factory()->create();

        $this->get($this->url)->assertRedirect(route('login')); // index
        $this->get("{$this->url}/{$inventoryGroup->id}")->assertRedirect(route('login')); // show
        $this->get("{$this->url}/create")->assertRedirect(route('login')); // create
        $this->post($this->url)->assertMethodNotAllowed(); // post
        $this->get("{$this->url}/{$inventoryGroup->id}/edit")->assertNotFound(); // edit
        $this->put("{$this->url}/{$inventoryGroup->id}")->assertMethodNotAllowed(); // update
        $this->delete("{$this->url}/{$inventoryGroup->id}")->assertMethodNotAllowed(); // destroy
    }

    public function test_user(): void
    {
        $this->seed();

        Sanctum::actingAs(User::factory()->create());

        $inventoryGroup = InventoryGroup::factory()->create();

        $this->get($this->url)->assertOk(); // index
        $this->get("{$this->url}/{$inventoryGroup->id}")->assertOk(); // show
        $this->get("{$this->url}/create")->assertNotFound(); // create
        $this->post($this->url)->assertMethodNotAllowed(); // post
        $this->get("{$this->url}/{$inventoryGroup->id}/edit")->assertNotFound(); // edit
        $this->put("{$this->url}/{$inventoryGroup->id}")->assertMethodNotAllowed(); // update
        $this->delete("{$this->url}/{$inventoryGroup->id}")->assertMethodNotAllowed(); // destroy
    }

    public function test_show_kitchen(): void
    {
        $this->seed();

        Sanctum::actingAs(User::factory()->create());

        $hamburguer = Dish::where('name', 'Hamburguesa')->first();
        $baguette = Dish::where('name', 'Baguette')->first();
        $pasta = Dish::where('name', 'Pasta')->first();
        $salad = Dish::where('name', 'Ensalada')->first();
        $quesoFundido = Dish::where('name', 'Queso fundido')->first();
        $alambre = Dish::where('name', 'Alambre')->first();
        $corte = Dish::where('name', 'Corte')->first();
        $mollete = Dish::where('name', 'Mollete')->first();

        $arrachera = Ingredient::where('name', 'Arrachera')->first();
        $pollo = Ingredient::where('name', 'Pollo')->first();
        $chistorra = Ingredient::where('name', 'Chistorra')->first();
        $panHambs = Ingredient::where('name', 'Pan Hambs.')->first();
        $panBags = Ingredient::where('name', 'Pan Bags.')->first();
        $papas = Ingredient::where('name', 'Papas')->first();
        $chuleta = Ingredient::where('name', 'Chuleta')->first();
        $molida = Ingredient::where('name', 'Molida')->first();
        $asada = Ingredient::where('name', 'Asada')->first();
        $pastor = Ingredient::where('name', 'Pastor')->first();
        $fettuccine = Ingredient::where('name', 'Fettuccine')->first();
        $carneHamb = Ingredient::where('name', 'Carne hambs.')->first();

        $quantity = 1;

        $this->assertNotNull($hamburguer, 'La Hamburguesa no existe en la base de datos.');
        $this->assertNotNull($baguette, 'El Baguette no existe en la base de datos.');
        $this->assertNotNull($pasta, 'La Pasta no existe en la base de datos.');
        $this->assertNotNull($salad, 'La Ensalada no existe en la base de datos.');
        $this->assertNotNull($quesoFundido, 'El Queso fundido no existe en la base de datos.');
        $this->assertNotNull($alambre, 'El Alambre no existe en la base de datos.');
        $this->assertNotNull($corte, 'El Corte no existe en la base de datos.');
        $this->assertNotNull($mollete, 'El Mollete no existe en la base de datos.');

        $this->assertNotNull($arrachera, 'El ingrediente Arrachera no existe en la base de datos.');
        $this->assertNotNull($pollo, 'El ingrediente Pollo no existe en la base de datos.');
        $this->assertNotNull($chistorra, 'El ingrediente Chistorra no existe en la base de datos.');
        $this->assertNotNull($panHambs, 'El ingrediente Pan Hambs. no existe en la base de datos.');
        $this->assertNotNull($panBags, 'El ingrediente Pan Bags. no existe en la base de datos.');
        $this->assertNotNull($papas, 'El ingrediente Papas no existe en la base de datos.');
        $this->assertNotNull($chuleta, 'El ingrediente Chuleta no existe en la base de datos.');
        $this->assertNotNull($molida, 'El ingrediente Molida no existe en la base de datos.');
        $this->assertNotNull($asada, 'El ingrediente Asada no existe en la base de datos.');
        $this->assertNotNull($pastor, 'El ingrediente Pastor no existe en la base de datos.');
        $this->assertNotNull($fettuccine, 'El ingrediente Fettuccine no existe en la base de datos.');
        $this->assertNotNull($carneHamb, 'El ingrediente Carne hambs. no existe en la base de datos.');

        $inventoryGroup = InventoryGroup::factory()
            ->has(
                InventoryItem::factory()->for($hamburguer, 'inventoryItemable')->state([
                    'remaining_quantity' => $quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($baguette, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($pasta, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($salad, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($quesoFundido, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($alambre, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($corte, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($mollete, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($arrachera, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($pollo, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($chistorra, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($panHambs, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($panBags, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($papas, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($chuleta, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($molida, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($asada, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($pastor, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($fettuccine, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->has(
                InventoryItem::factory()->for($carneHamb, 'inventoryItemable')->state([
                    'remaining_quantity' => ++$quantity,
                    'made_quantity' => $quantity,
                    'useful_quantity' => $quantity,
                    'sold_quantity' => $quantity
                ])
            )
            ->create([
                'type' => InventoryGroup::KITCHEN_TYPE
            ]);

        $this->get(route('inventory-groups.show', $inventoryGroup->id))
            ->assertOk()
            ->assertInertia(
                fn(AssertableInertia $page) =>
                $page->component('InventoryGroups/Show')
                    ->has(
                        'inventoryGroup',
                        fn(AssertableInertia $page) =>
                        $page->has('id')
                            ->has('type')
                            ->has('date')
                            ->has('hamburger_sold_quantity')
                            ->has('baguette_sold_quantity')
                            ->has('pasta_sold_quantity')
                            ->has('salad_sold_quantity')
                            ->has('quesoFundido_sold_quantity')
                            ->has('alambre_sold_quantity')
                            ->has('corte_sold_quantity')
                            ->has('mollete_sold_quantity')
                            ->has('arrachera_remaining_quantity')
                            ->has('arrachera_made_quantity')
                            ->has('arrachera_useful_quantity')
                            ->has('arrachera_sold_quantity')
                            ->has('pollo_remaining_quantity')
                            ->has('pollo_made_quantity')
                            ->has('pollo_useful_quantity')
                            ->has('pollo_sold_quantity')
                            ->has('chistorra_remaining_quantity')
                            ->has('chistorra_made_quantity')
                            ->has('chistorra_useful_quantity')
                            ->has('chistorra_sold_quantity')
                            ->has('panHams_remaining_quantity')
                            ->has('panHams_made_quantity')
                            ->has('panHams_useful_quantity')
                            ->has('panHams_sold_quantity')
                            ->has('panBags_remaining_quantity')
                            ->has('panBags_made_quantity')
                            ->has('panBags_useful_quantity')
                            ->has('panBags_sold_quantity')
                            ->has('papas_remaining_quantity')
                            ->has('papas_made_quantity')
                            ->has('papas_useful_quantity')
                            ->has('papas_sold_quantity')
                            ->has('chuleta_remaining_quantity')
                            ->has('chuleta_made_quantity')
                            ->has('chuleta_useful_quantity')
                            ->has('chuleta_sold_quantity')
                            ->has('molida_remaining_quantity')
                            ->has('molida_made_quantity')
                            ->has('molida_useful_quantity')
                            ->has('molida_sold_quantity')
                            ->has('asada_remaining_quantity')
                            ->has('asada_made_quantity')
                            ->has('asada_useful_quantity')
                            ->has('asada_sold_quantity')
                            ->has('pastor_remaining_quantity')
                            ->has('pastor_made_quantity')
                            ->has('pastor_useful_quantity')
                            ->has('pastor_sold_quantity')
                            ->has('fettuccine_remaining_quantity')
                            ->has('fettuccine_made_quantity')
                            ->has('fettuccine_useful_quantity')
                            ->has('fettuccine_sold_quantity')
                            ->has('carneHamb_remaining_quantity')
                            ->has('carneHamb_made_quantity')
                            ->has('carneHamb_useful_quantity')
                            ->has('carneHamb_sold_quantity')
                    )
                    ->where('inventoryGroup.hamburger_sold_quantity', 1)
                    ->where('inventoryGroup.baguette_sold_quantity', 2)
                    ->where('inventoryGroup.pasta_sold_quantity', 3)
                    ->where('inventoryGroup.salad_sold_quantity', 4)
                    ->where('inventoryGroup.quesoFundido_sold_quantity', 5)
                    ->where('inventoryGroup.alambre_sold_quantity', 6)
                    ->where('inventoryGroup.corte_sold_quantity', 7)
                    ->where('inventoryGroup.mollete_sold_quantity', 8)
                    ->where('inventoryGroup.arrachera_remaining_quantity', 9)
                    ->where('inventoryGroup.arrachera_made_quantity', 9)
                    ->where('inventoryGroup.arrachera_useful_quantity', 9)
                    ->where('inventoryGroup.arrachera_sold_quantity', 9)
                    ->where('inventoryGroup.pollo_remaining_quantity', 10)
                    ->where('inventoryGroup.pollo_made_quantity', 10)
                    ->where('inventoryGroup.pollo_useful_quantity', 10)
                    ->where('inventoryGroup.pollo_sold_quantity', 10)
                    ->where('inventoryGroup.chistorra_remaining_quantity', 11)
                    ->where('inventoryGroup.chistorra_made_quantity', 11)
                    ->where('inventoryGroup.chistorra_useful_quantity', 11)
                    ->where('inventoryGroup.chistorra_sold_quantity', 11)
                    ->where('inventoryGroup.panHams_remaining_quantity', 12)
                    ->where('inventoryGroup.panHams_made_quantity', 12)
                    ->where('inventoryGroup.panHams_useful_quantity', 12)
                    ->where('inventoryGroup.panHams_sold_quantity', 12)
                    ->where('inventoryGroup.panBags_remaining_quantity', 13)
                    ->where('inventoryGroup.panBags_made_quantity', 13)
                    ->where('inventoryGroup.panBags_useful_quantity', 13)
                    ->where('inventoryGroup.panBags_sold_quantity', 13)
                    ->where('inventoryGroup.papas_remaining_quantity', 14)
                    ->where('inventoryGroup.papas_made_quantity', 14)
                    ->where('inventoryGroup.papas_useful_quantity', 14)
                    ->where('inventoryGroup.papas_sold_quantity', 14)
                    ->where('inventoryGroup.chuleta_remaining_quantity', 15)
                    ->where('inventoryGroup.chuleta_made_quantity', 15)
                    ->where('inventoryGroup.chuleta_useful_quantity', 15)
                    ->where('inventoryGroup.chuleta_sold_quantity', 15)
                    ->where('inventoryGroup.molida_remaining_quantity', 16)
                    ->where('inventoryGroup.molida_made_quantity', 16)
                    ->where('inventoryGroup.molida_useful_quantity', 16)
                    ->where('inventoryGroup.molida_sold_quantity', 16)
                    ->where('inventoryGroup.asada_remaining_quantity', 17)
                    ->where('inventoryGroup.asada_made_quantity', 17)
                    ->where('inventoryGroup.asada_useful_quantity', 17)
                    ->where('inventoryGroup.asada_sold_quantity', 17)
                    ->where('inventoryGroup.pastor_remaining_quantity', 18)
                    ->where('inventoryGroup.pastor_made_quantity', 18)
                    ->where('inventoryGroup.pastor_useful_quantity', 18)
                    ->where('inventoryGroup.pastor_sold_quantity', 18)
                    ->where('inventoryGroup.fettuccine_remaining_quantity', 19)
                    ->where('inventoryGroup.fettuccine_made_quantity', 19)
                    ->where('inventoryGroup.fettuccine_useful_quantity', 19)
                    ->where('inventoryGroup.fettuccine_sold_quantity', 19)
                    ->where('inventoryGroup.carneHamb_remaining_quantity', 20)
                    ->where('inventoryGroup.carneHamb_made_quantity', 20)
                    ->where('inventoryGroup.carneHamb_useful_quantity', 20)
                    ->where('inventoryGroup.carneHamb_sold_quantity', 20)
            );
    }

    public function test_show_pizza(): void
    {
        $this->seed();

        Sanctum::actingAs(User::factory()->create());

        $bigPizza = Dish::where('name', 'Pizza grande')->first();
        $smallPizza = Dish::where('name', 'Pizza chica')->first();

        $inventoryGroup = InventoryGroup::factory()
            ->has(
                InventoryItem::factory()->for(
                    $bigPizza,
                    'inventoryItemable'
                )->state([
                    'remaining_quantity' => 10,
                    'made_quantity' => 20,
                    'useful_quantity' => 30,
                    'sold_quantity' => 40
                ])
            )
            ->has(
                InventoryItem::factory()->for(
                    $smallPizza,
                    'inventoryItemable'
                )->state([
                    'remaining_quantity' => 1,
                    'made_quantity' => 2,
                    'useful_quantity' => 3,
                    'sold_quantity' => 4
                ])
            )
            ->create([
                'type' => InventoryGroup::PIZZA_TYPE
            ]);

        $this->get(route('inventory-groups.show', $inventoryGroup->id))
            ->assertOk()
            ->assertInertia(
                fn(AssertableInertia $page) =>
                $page->component('InventoryGroups/Show')
                    ->has(
                        'inventoryGroup',
                        fn(AssertableInertia $page) =>
                        $page->has('id')
                            ->has('type')
                            ->has('big_pizza_remaining_quantity')
                            ->has('big_pizza_made_quantity')
                            ->has('big_pizza_useful_quantity')
                            ->has('big_pizza_sold_quantity')
                            ->has('small_pizza_remaining_quantity')
                            ->has('small_pizza_made_quantity')
                            ->has('small_pizza_useful_quantity')
                            ->has('small_pizza_sold_quantity')
                            ->has('date')
                    )
                    ->where('inventoryGroup.id', $inventoryGroup->id)
                    ->where('inventoryGroup.big_pizza_remaining_quantity', 10)
                    ->where('inventoryGroup.big_pizza_made_quantity', 20)
                    ->where('inventoryGroup.big_pizza_useful_quantity', 30)
                    ->where('inventoryGroup.big_pizza_sold_quantity', 40)
                    ->where('inventoryGroup.small_pizza_remaining_quantity', 1)
                    ->where('inventoryGroup.small_pizza_made_quantity', 2)
                    ->where('inventoryGroup.small_pizza_useful_quantity', 3)
                    ->where('inventoryGroup.small_pizza_sold_quantity', 4)
            );
    }

    public function test_index(): void
    {
        $this->seed();

        Sanctum::actingAs(User::factory()->create());

        $bigPizza = Dish::where('name', 'Pizza grande')->first();
        $smallPizza = Dish::where('name', 'Pizza chica')->first();
        $hamburguer = Dish::where('name', 'Hamburguesa')->first();
        $baguette = Dish::where('name', 'Baguette')->first();

        $inventoryGroup1 = InventoryGroup::factory()
            ->has(
                InventoryItem::factory()->for(
                    $bigPizza,
                    'inventoryItemable'
                )->state([
                    'sold_quantity' => 10
                ])
            )
            ->has(
                InventoryItem::factory()->for(
                    $smallPizza,
                    'inventoryItemable'
                )->state([
                    'sold_quantity' => 5
                ])
            )
            ->create([
                'type' => 'pizza',
                'date' => '2024-10-28'
            ]);
        $inventoryGroup2 = InventoryGroup::factory()
            ->has(
                InventoryItem::factory()->for(
                    $bigPizza,
                    'inventoryItemable'
                )->state([
                    'sold_quantity' => 2
                ])
            )
            ->has(
                InventoryItem::factory()->for(
                    $smallPizza,
                    'inventoryItemable'
                )->state([
                    'sold_quantity' => 7
                ])
            )
            ->create([
                'type' => 'pizza',
                'date' => '2024-10-27'
            ]);
        $inventoryGroup3 = InventoryGroup::factory()
            ->has(
                InventoryItem::factory()->for(
                    $hamburguer,
                    'inventoryItemable'
                )->state([
                    'sold_quantity' => 1
                ])
            )
            ->has(
                InventoryItem::factory()->for(
                    $baguette,
                    'inventoryItemable'
                )->state([
                    'sold_quantity' => 3
                ])
            )
            ->create([
                'type' => 'kitchen',
                'date' => '2024-10-28'
            ]);
        $inventoryGroup4 = InventoryGroup::factory()
            ->has(
                InventoryItem::factory()->for(
                    $hamburguer,
                    'inventoryItemable'
                )->state([
                    'sold_quantity' => 11
                ])
            )
            ->has(
                InventoryItem::factory()->for(
                    $baguette,
                    'inventoryItemable'
                )->state([
                    'sold_quantity' => 20
                ])
            )
            ->create([
                'type' => 'kitchen',
                'date' => '2024-10-27'
            ]);

        $this->get(route('inventory-groups.index'))
            ->assertOk()
            ->assertInertia(
                fn(AssertableInertia $page) =>
                $page->component('InventoryGroups/Index')
                    ->has(
                        'kitchenInventoryGroups',
                        2,
                        fn(AssertableInertia $page) =>
                        $page->has('id')
                            ->has('date')
                            ->has('hamburger_sold_quantity')
                            ->has('baguette_sold_quantity')
                    )
                    ->has(
                        'pizzaInventoryGroups',
                        2,
                        fn(AssertableInertia $page) =>
                        $page->has('id')
                            ->has('date')
                            ->has('big_pizza_sold_quantity')
                            ->has('small_pizza_sold_quantity')
                    )
                    ->where('kitchenInventoryGroups.0.id', $inventoryGroup4->id)
                    ->where('kitchenInventoryGroups.0.hamburger_sold_quantity', 11)
                    ->where('kitchenInventoryGroups.0.baguette_sold_quantity', 20)
                    ->where('kitchenInventoryGroups.1.id', $inventoryGroup3->id)
                    ->where('kitchenInventoryGroups.1.hamburger_sold_quantity', 1)
                    ->where('kitchenInventoryGroups.1.baguette_sold_quantity', 3)
                    ->where('pizzaInventoryGroups.0.id', $inventoryGroup2->id)
                    ->where('pizzaInventoryGroups.0.big_pizza_sold_quantity', 2)
                    ->where('pizzaInventoryGroups.0.small_pizza_sold_quantity', 7)
                    ->where('pizzaInventoryGroups.1.id', $inventoryGroup1->id)
                    ->where('pizzaInventoryGroups.1.big_pizza_sold_quantity', 10)
                    ->where('pizzaInventoryGroups.1.small_pizza_sold_quantity', 5)
            );
    }
}
