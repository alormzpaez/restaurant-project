<?php

namespace Tests\Unit\Models;

use App\Models\Dish;
use App\Models\OrderItem;
use App\Models\Variant;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class VariantTest extends TestCase
{
    use RefreshDatabase;

    public function test_belongs_to_dish(): void
    {
        $variant = Variant::factory()->create();

        $this->assertInstanceOf(Dish::class, $variant->dish);
    }

    public function test_has_many_order_items(): void
    {
        $variant = Variant::factory()->hasOrderItems()->create();

        $this->assertInstanceOf(Collection::class, $variant->orderItems);
        $this->assertInstanceOf(OrderItem::class, $variant->orderItems->get(0));
    }
}
