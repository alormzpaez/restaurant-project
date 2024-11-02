<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Dish;
use App\Models\OrderGroup;
use App\Models\User;
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
        $this->get("{$this->url}/{$orderGroup->id}")->assertNotFound(); // show
        $this->get("{$this->url}/create")->assertRedirect(route('login')); // create
        $this->post($this->url)->assertMethodNotAllowed(); // post
        $this->get("{$this->url}/{$orderGroup->id}/edit")->assertNotFound(); // edit
        $this->put("{$this->url}/{$orderGroup->id}")->assertNotFound(); // update
        $this->delete("{$this->url}/{$orderGroup->id}")->assertNotFound(); // destroy
    }

    public function test_user(): void
    {
        Sanctum::actingAs(User::factory()->create());
        $orderGroup = OrderGroup::factory()->create();

        $this->get($this->url)->assertOk(); // index
        $this->get("{$this->url}/{$orderGroup->id}")->assertNotFound(); // show
        $this->get("{$this->url}/create")->assertOk(); // create
        $this->post($this->url)->assertMethodNotAllowed(); // post
        $this->get("{$this->url}/{$orderGroup->id}/edit")->assertNotFound(); // edit
        $this->put("{$this->url}/{$orderGroup->id}")->assertNotFound(); // update
        $this->delete("{$this->url}/{$orderGroup->id}")->assertNotFound(); // destroy
    }

    public function test_index(): void
    {
        Sanctum::actingAs(User::factory()->create());

        $this->get(route('order-groups.index'))
            ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) =>
            $page->component('OrderGroups/Index')
        );
    }

    public function test_create(): void
    {
        Sanctum::actingAs(User::factory()->create());

        Dish::factory()->hasVariants()->create();

        $this->get(route('order-groups.create'))
            ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) =>
            $page->component('OrderGroups/Create')
            ->has('dishes', 1, fn (AssertableInertia $page) =>
                $page->has('id')
                    ->has('name')
                ->has('variants', 1, fn (AssertableInertia $page) =>
                    $page->has('id')
                        ->has('dish_id')
                        ->has('name')
                        ->has('price')
                    ->has('dish', fn (AssertableInertia $page) =>
                        $page->has('id')
                        ->has('name')
                    )
                )
            )
        );
    }
}
