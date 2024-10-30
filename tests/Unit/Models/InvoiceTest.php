<?php

namespace Tests\Unit\Models;

use App\Models\Invoice;
use App\Models\OrderGroup;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class InvoiceTest extends TestCase
{
    use RefreshDatabase;

    public function test_default_values(): void
    {
        $invoice = Invoice::factory()->create();

        $this->assertEquals($invoice->payment_method, Invoice::CASH_PAYMENT_METHOD);
    }

    public function test_belongs_to_order_group(): void
    {
        $invoice = Invoice::factory()->create();

        $this->assertInstanceOf(OrderGroup::class, $invoice->orderGroup);
    }
}
