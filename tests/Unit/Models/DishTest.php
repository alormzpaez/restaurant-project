<?php

namespace Tests\Unit\Models;

use App\Models\Dish;
use App\Models\InventoryItem;
use App\Models\Variant;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DishTest extends TestCase
{
    use RefreshDatabase;

    public function test_has_many_variants(): void
    {
        $dish = Dish::factory()->hasVariants()->create();

        $this->assertInstanceOf(Collection::class, $dish->variants);
        $this->assertInstanceOf(Variant::class, $dish->variants->get(0));
    }

    public function test_has_many_inventory_items(): void
    {
        $dish = Dish::factory()->hasInventoryItems()->create();

        $this->assertInstanceOf(Collection::class, $dish->inventoryItems);
        $this->assertInstanceOf(InventoryItem::class, $dish->inventoryItems->get(0));
    }
}
