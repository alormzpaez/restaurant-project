<?php

namespace Tests\Unit\Models;

use App\Models\OrderGroup;
use App\Models\ShippingBreakdown;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ShippingBreakdownTest extends TestCase
{
    use RefreshDatabase;

    public function test_belongs_to_order_group(): void
    {
        $shippingBreakdown = ShippingBreakdown::factory()->create();

        $this->assertInstanceOf(OrderGroup::class, $shippingBreakdown->orderGroup);
    }
}
