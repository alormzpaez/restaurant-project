<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\InventoryGroup;
use App\Models\Invoice;
use App\Models\OrderGroup;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class InvoiceControllerTest extends TestCase
{
    use RefreshDatabase;

    public string $url = '/invoices';

    public function test_guest(): void
    {
        $invoice = Invoice::factory()->create();

        $this->get($this->url)->assertRedirect(route('login')); // index
        $this->get("{$this->url}/{$invoice->id}")->assertRedirect(route('login')); // show
        $this->get("{$this->url}/create")->assertRedirect(route('login')); // create
        $this->post($this->url)->assertRedirect(route('login')); // post
        $this->get("{$this->url}/{$invoice->id}/edit")->assertRedirect(route('login')); // edit
        $this->put("{$this->url}/{$invoice->id}")->assertRedirect(route('login')); // update
        $this->delete("{$this->url}/{$invoice->id}")->assertRedirect(route('login')); // destroy
    }

    public function test_user(): void
    {
        Sanctum::actingAs(User::factory()->create());

        $invoice = Invoice::factory()->create();

        $this->get($this->url)->assertOk(); // index
        $this->get("{$this->url}/{$invoice->id}")->assertOk(); // show
        $this->get("{$this->url}/create")->assertOk(); // create
        $this->post($this->url)->assertInvalid(); // post
        $this->get("{$this->url}/{$invoice->id}/edit")->assertOk(); // edit
        $this->put("{$this->url}/{$invoice->id}")->assertInvalid(); // update
        $this->delete("{$this->url}/{$invoice->id}")->assertRedirect(); // destroy
    }

    public function test_index(): void
    {
        Carbon::setTestNow();
        Sanctum::actingAs(User::factory()->create());

        $invoice1 = Invoice::factory()->create();

        $this->travelTo(now()->addDay());

        $invoice2 = Invoice::factory()->create();

        $this->get(route('invoices.index'))
            ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) =>
            $page->component('Invoices/Index')
            ->has('invoices', 2, fn (AssertableInertia $page) =>
                $page->has('id')
                    ->has('created_at')
                ->has('client')
            )
            ->where('invoices.0.id', $invoice2->id)
            ->where('invoices.1.id', $invoice1->id)
        );
    }

    public function test_show(): void
    {
        Sanctum::actingAs(User::factory()->create());

        $invoice = Invoice::factory()
            ->for(
                OrderGroup::factory()->state([
                    'total' => 100
                ])
            )
        ->create();

        $this->get(route('invoices.show', $invoice->id))
            ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) =>
            $page->component('Invoices/Show')
            ->has('invoice', fn (AssertableInertia $page) =>
                $page->has('id')
                    ->has('order_group_id')
                    ->has('client')
                    ->has('rfc')
                    ->has('tax_domicile')
                    ->has('payment_mode')
                    ->has('tax_folio')
                    ->has('voucher_number')
                    ->has('voucher_date')
                    ->has('payment_method')
                    ->has('cfdi_date')
                    ->has('created_at')
                    ->has('updated_at')
                    ->has('subtotal')
                    ->has('iva')
                ->has('total')
            )
            ->where('invoice.total', 100)
            ->where('invoice.iva', 16)
            ->where('invoice.subtotal', 84)
        );
    }

    public function test_edit(): void
    {
        Sanctum::actingAs(User::factory()->create());

        $invoice = Invoice::factory()
            ->for(
                OrderGroup::factory()->state([
                    'total' => 100
                ])
            )
        ->create();

        $this->get(route('invoices.edit', $invoice->id))
            ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) =>
            $page->component('Invoices/Edit')
            ->has('invoice', fn (AssertableInertia $page) =>
                $page->has('id')
                    ->has('order_group_id')
                    ->has('client')
                    ->has('rfc')
                    ->has('tax_domicile')
                    ->has('payment_mode')
                    ->has('tax_folio')
                    ->has('voucher_number')
                    ->has('voucher_date')
                    ->has('payment_method')
                    ->has('cfdi_date')
                    ->has('created_at')
                    ->has('updated_at')
                    ->has('subtotal')
                    ->has('iva')
                ->has('total')
            )
            ->where('invoice.total', 100)
            ->where('invoice.iva', 16)
            ->where('invoice.subtotal', 84)
        );
    }

    public function test_update(): void
    {
        Sanctum::actingAs(User::factory()->create());

        $invoice = Invoice::factory()
            ->for(
                OrderGroup::factory()->state([
                    'total' => 100
                ])
            )
        ->create();

        $this->get(route('invoices.edit', $invoice->id))->assertOk();

        $data = [
            'client' => 'Client',
            'rfc' => 'RFC',
            'tax_domicile' => 'Address',
            'payment_mode' => 'Payment mode',
            'tax_folio' => 'Folio',
            'voucher_number' => 1,
            'voucher_date' => '2024-10-22',
            'payment_method' => Invoice::CASH_PAYMENT_METHOD,
            'cfdi_date' => '2024-10-22'
        ];

        $this->put(route('invoices.update', $invoice->id), $data)
            ->assertValid()
        ->assertRedirect(route('invoices.show', $invoice->id));

        $invoice->refresh();

        $this->assertEquals($data['client'], $invoice->client);
        $this->assertEquals($data['rfc'], $invoice->rfc);
        $this->assertEquals($data['tax_domicile'], $invoice->tax_domicile);
        $this->assertEquals($data['payment_mode'], $invoice->payment_mode);
        $this->assertEquals($data['tax_folio'], $invoice->tax_folio);
        $this->assertEquals($data['voucher_number'], $invoice->voucher_number);
        $this->assertEquals($data['voucher_date'], $invoice->voucher_date);
        $this->assertEquals($data['payment_method'], $invoice->payment_method);
        $this->assertEquals($data['cfdi_date'], $invoice->cfdi_date);
    }

    public function test_destroy(): void
    {
        Sanctum::actingAs(User::factory()->create());

        $invoice = Invoice::factory()->create();

        $this->get(route('invoices.index'))->assertOk();

        $this->delete(route('invoices.destroy', $invoice->id))->assertRedirect(route('invoices.index'));

        $this->assertDatabaseCount('invoices', 0);
        $this->assertEmpty(Invoice::all());
    }

    // public function test_create(): void
    // {
    //     Sanctum::actingAs(User::factory()->create());

    //     $this->get(route('invoices.create'))
    //         ->assertOk()
    //     ->assertInertia(fn (AssertableInertia $page) =>
    //         $page->component('Invoices/Create')
    //     );
    // }

    // public function test_store(): void
    // {
    //     Sanctum::actingAs(User::factory()->create());

    //     $this->get(route('invoices.index'))->assertOk();

    //     $data = [
    //         'client' => 'Client',
    //         'rfc' => 'RFC',
    //         'tax_domicile' => 'Address',
    //         'payment_mode' => 'Payment mode',
    //         'tax_folio' => 'Folio',
    //         'voucher_number' => 1,
    //         'voucher_date' => '2024-10-22',
    //         'payment_method' => Invoice::CASH_PAYMENT_METHOD,
    //         'cfdi_date' => '2024-10-22'
    //     ];

    //     $this->post(route('invoices.store'), $data)
    //         ->assertValid()
    //     ->assertRedirect(route('invoices.index'));

    //     $this->assertDatabaseHas('invoices', $data);
    // }
}
