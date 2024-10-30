<?php

namespace Tests\Unit\Models;

use App\Models\Ingredient;
use App\Models\InventoryGroup;
use App\Models\InventoryItem;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class InventoryGroupTest extends TestCase
{
    use RefreshDatabase;

    public function test_has_many_inventory_items(): void
    {
        $inventoryGroup = InventoryGroup::factory()->has(
            InventoryItem::factory()->for(
                Ingredient::factory(), 'inventoryItemable'
            )
        )->create();

        $this->assertInstanceOf(Collection::class, $inventoryGroup->inventoryItems);
        $this->assertInstanceOf(InventoryItem::class, $inventoryGroup->inventoryItems->get(0));
    }
}
