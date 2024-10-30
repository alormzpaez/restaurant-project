<?php

namespace Tests\Unit\Models;

use App\Models\Ingredient;
use App\Models\InventoryItem;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class IngredientTest extends TestCase
{
    use RefreshDatabase;

    public function test_has_many_inventory_items(): void
    {
        $ingredient = Ingredient::factory()->hasInventoryItems()->create();

        $this->assertInstanceOf(Collection::class, $ingredient->inventoryItems);
        $this->assertInstanceOf(InventoryItem::class, $ingredient->inventoryItems->get(0));
    }
}
