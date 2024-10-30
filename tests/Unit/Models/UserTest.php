<?php

namespace Tests\Unit\Models;

use App\Models\OrderGroup;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_has_one_order_group(): void
    {
        $customer = User::factory()->hasOrderGroup()->create();

        $this->assertInstanceOf(OrderGroup::class, $customer->orderGroup);
    }
}
