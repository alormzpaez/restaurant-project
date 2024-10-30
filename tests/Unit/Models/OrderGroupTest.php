<?php

namespace Tests\Unit\Models;

use App\Models\Invoice;
use App\Models\OrderGroup;
use App\Models\OrderItem;
use App\Models\ShippingBreakdown;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class OrderGroupTest extends TestCase
{
    use RefreshDatabase;

    public function test_default_values(): void
    {
        $orderGroup = OrderGroup::factory()->create();

        $this->assertEquals($orderGroup->delivery_type, OrderGroup::RESTAURANT_DELIVERY_TYPE);
        $this->assertEquals($orderGroup->payment_method, OrderGroup::CASH_PAYMENT_METHOD);
        $this->assertEquals($orderGroup->status, OrderGroup::UNFINISHED_STATUS);
        $this->assertFalse($orderGroup->apply_invoice);
    }

    public function test_has_many_order_items(): void
    {
        $orderGroup = OrderGroup::factory()->hasOrderItems()->create();

        $this->assertInstanceOf(Collection::class, $orderGroup->orderItems);
        $this->assertInstanceOf(OrderItem::class, $orderGroup->orderItems->get(0));
    }

    public function test_has_one_invoice(): void
    {
        $orderGroup = OrderGroup::factory()->create();

        $this->assertNull($orderGroup->invoice);

        $orderGroup = OrderGroup::factory()->hasInvoice()->create();

        $this->assertInstanceOf(Invoice::class, $orderGroup->invoice);
    }

    public function test_has_one_shipping_breakdown(): void
    {
        $orderGroup = OrderGroup::factory()->create();

        $this->assertNull($orderGroup->shippingBreakdown);

        $orderGroup = OrderGroup::factory()->hasShippingBreakdown()->create();

        $this->assertInstanceOf(ShippingBreakdown::class, $orderGroup->shippingBreakdown);
    }

    public function test_belongs_to_nullable_customer(): void
    {
        $orderGroup = OrderGroup::factory()->create();

        $this->assertNull($orderGroup->customer);

        $customer = User::factory()->create();

        $orderGroup->customer()->associate($customer);
        $orderGroup->save();

        $this->assertInstanceOf(User::class, $orderGroup->customer);
        $this->assertEquals($orderGroup->customer->id, $customer->id);
    }
}
