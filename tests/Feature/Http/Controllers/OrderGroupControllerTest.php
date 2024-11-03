<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Dish;
use App\Models\Invoice;
use App\Models\OrderGroup;
use App\Models\OrderItem;
use App\Models\User;
use App\Models\Variant;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class OrderGroupControllerTest extends TestCase
{
    use RefreshDatabase;

    public string $url = '/order-groups';

    public function test_guest(): void
    {
        $orderGroup = OrderGroup::factory()->create();

        $this->get($this->url)->assertRedirect(route('login')); // index
        $this->get("{$this->url}/{$orderGroup->id}")->assertRedirect(route('login')); // show
        $this->get("{$this->url}/create")->assertRedirect(route('login')); // create
        $this->post($this->url)->assertRedirect(route('login')); // post
        $this->get("{$this->url}/{$orderGroup->id}/edit")->assertNotFound(); // edit
        $this->put("{$this->url}/{$orderGroup->id}")->assertMethodNotAllowed(); // update
        $this->delete("{$this->url}/{$orderGroup->id}")->assertMethodNotAllowed(); // destroy
    }

    public function test_user(): void
    {
        Sanctum::actingAs(User::factory()->create());
        $orderGroup = OrderGroup::factory()->create();

        $this->get($this->url)->assertOk(); // index
        $this->get("{$this->url}/{$orderGroup->id}")->assertOk(); // show
        $this->get("{$this->url}/create")->assertOk(); // create
        $this->post($this->url)->assertInvalid(); // post
        $this->get("{$this->url}/{$orderGroup->id}/edit")->assertNotFound(); // edit
        $this->put("{$this->url}/{$orderGroup->id}")->assertMethodNotAllowed(); // update
        $this->delete("{$this->url}/{$orderGroup->id}")->assertMethodNotAllowed(); // destroy
    }

    public function test_index(): void
    {
        Sanctum::actingAs(User::factory()->create());

        OrderGroup::factory()->create();

        $this->get(route('order-groups.index'))
            ->assertOk()
            ->assertInertia(
                fn(AssertableInertia $page) =>
                $page->component('OrderGroups/Index')
                    ->has(
                        'orderGroups',
                        1,
                        fn(AssertableInertia $page) =>
                        $page->has('id')
                            ->has('apply_invoice')
                            ->has('status')
                            ->has('total')
                    )
            );
    }

    public function test_create(): void
    {
        Sanctum::actingAs(User::factory()->create());

        Dish::factory()->hasVariants()->create();

        $this->get(route('order-groups.create'))
            ->assertOk()
            ->assertInertia(
                fn(AssertableInertia $page) =>
                $page->component('OrderGroups/Create')
                    ->has(
                        'dishes',
                        1,
                        fn(AssertableInertia $page) =>
                        $page->has('id')
                            ->has('name')
                            ->has(
                                'variants',
                                1,
                                fn(AssertableInertia $page) =>
                                $page->has('id')
                                    ->has('dish_id')
                                    ->has('name')
                                    ->has('price')
                                    ->has(
                                        'dish',
                                        fn(AssertableInertia $page) =>
                                        $page->has('id')
                                            ->has('name')
                                    )
                            )
                    )
            );
    }

    public function test_store_restaurant(): void
    {
        Carbon::setTestNow();

        Sanctum::actingAs(User::factory()->create());

        $variant1 = Variant::factory()->create([
            'price' => 100
        ]);
        $variant2 = Variant::factory()->create([
            'price' => 50
        ]);

        $this->get(route('order-groups.create'))->assertOk();

        $data = [
            'apply_invoice' => true,
            'delivery_type' => OrderGroup::RESTAURANT_DELIVERY_TYPE,
            'payment_method' => OrderGroup::CARD_PAYMENT_METHOD,
            'order_items' => [
                [
                    'quantity' => 2,
                    'variant_id' => $variant1->id,
                    // Simulating extra data
                    'subtotal' => 0,
                    'variant' => [
                        'id' => 1
                    ]
                ],
                [
                    'quantity' => 1,
                    'variant_id' => $variant2->id,
                    // Simulating extra data
                    'subtotal' => 0,
                    'variant' => [
                        'id' => 1
                    ]
                ]
            ],
            'client' => 'Client'
        ];

        $this->post(route('order-groups.store'), $data)
            ->assertValid()
            ->assertRedirect(route('order-groups.index'));

        $orderGroup = OrderGroup::with('orderItems')->first();

        $this->assertDatabaseCount('invoices', 1);
        $this->assertDatabaseHas('invoices', [
            'client' => $data['client'],
            'rfc' => '',
            'tax_domicile' => '',
            'payment_mode' => '',
            'tax_folio' => '',
            'voucher_number' => 0,
            'voucher_date' => now()->format('Y-m-d'),
            'payment_method' => Invoice::CARD_PAYMENT_METHOD,
            'cfdi_date' => now()->format('Y-m-d'),
        ]);
        $this->assertDatabaseCount('order_groups', 1);
        $this->assertDatabaseCount('order_items', 2);
        $this->assertEquals($orderGroup->total, 250);
        $this->assertEquals($orderGroup->orderItems->get(0)->subtotal, 200);
        $this->assertEquals($orderGroup->orderItems->get(1)->subtotal, 50);
    }

    public function test_show(): void
    {
        Sanctum::actingAs(User::factory()->create());

        $orderGroup = OrderGroup::factory()->hasInvoice()->has(
            OrderItem::factory()->for(
                Variant::factory()->for(
                    Dish::factory()->state([
                        'name' => 'Dish'
                    ])
                )
                    ->state([
                        'name' => 'Variant',
                        'price' => 100
                    ])
            )->state([
                'quantity' => 2
            ])
        )->create([
            'total' => 200
        ]);

        $this->get(route('order-groups.show', $orderGroup->id))
            ->assertOk()
            ->assertInertia(
                fn(AssertableInertia $page) =>
                $page->component('OrderGroups/Show')
                    ->has(
                        'orderGroup',
                        fn(AssertableInertia $page) =>
                        $page->has('id')
                            ->has('apply_invoice')
                            ->has('delivery_type')
                            ->has('status')
                            ->has('total')
                            ->has('invoice', fn(AssertableInertia $page) =>
                                $page->has('id')
                                    ->has('client')
                                ->has('order_group_id')
                            )
                            ->has(
                                'orderItems',
                                1,
                                fn(AssertableInertia $page) =>
                                $page->has('id')
                                    ->has('quantity')
                                    ->has(
                                        'variant',
                                        fn(AssertableInertia $page) =>
                                        $page->has('id')
                                            ->has('dish_id')
                                            ->has('name')
                                            ->has('price')
                                            ->has(
                                                'dish',
                                                fn(AssertableInertia $page) =>
                                                $page->has('id')
                                                    ->has('name')
                                            )
                                    )
                            )
                    )
            );
    }
}
