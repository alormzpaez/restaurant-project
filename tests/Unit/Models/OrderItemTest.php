<?php

namespace Tests\Unit\Models;

use App\Models\OrderGroup;
use App\Models\OrderItem;
use App\Models\Variant;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class OrderItemTest extends TestCase
{
    use RefreshDatabase;

    public function test_belongs_to_order_group(): void
    {
        $orderItem = OrderItem::factory()->create();

        $this->assertInstanceOf(OrderGroup::class, $orderItem->orderGroup);
    }

    public function test_belongs_to_variant(): void
    {
        $orderItem = OrderItem::factory()->create();

        $this->assertInstanceOf(Variant::class, $orderItem->variant);
    }
}
