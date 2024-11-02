<?php

namespace Database\Seeders;

use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\InventoryGroup;
use App\Models\InventoryItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InventoryGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
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

        // Kitchen
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
    }
}
