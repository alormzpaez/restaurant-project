<?php

namespace Tests\Unit\Models;

use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\InventoryGroup;
use App\Models\InventoryItem;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class InventoryItemTest extends TestCase
{
    use RefreshDatabase;

    public function test_belongs_to_inventory_group(): void
    {
        $inventoryItem = InventoryItem::factory()->for(
            Ingredient::factory(), 'inventoryItemable'
        )
        ->create();

        $this->assertInstanceOf(InventoryGroup::class, $inventoryItem->inventoryGroup);
    }

    public function test_belongs_to_dish(): void
    {
        $inventoryItem = InventoryItem::factory()->for(
            Dish::factory(), 'inventoryItemable'
        )->create();

        $this->assertInstanceOf(Dish::class, $inventoryItem->inventoryItemable);
    }

    public function test_belongs_to_ingredient(): void
    {
        $inventoryItem = InventoryItem::factory()->for(
            Ingredient::factory(), 'inventoryItemable'
        )->create();

        $this->assertInstanceOf(Ingredient::class, $inventoryItem->inventoryItemable);
    }
}
