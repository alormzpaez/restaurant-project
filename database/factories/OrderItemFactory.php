<?php

namespace Database\Factories;

use App\Models\OrderGroup;
use App\Models\Variant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderItem>
 */
class OrderItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'variant_id' => Variant::factory(),
            'order_group_id' => OrderGroup::factory(),
            'quantity' => fake()->numberBetween(1, 10),
            'subtotal' => fake()->randomFloat(2, 1, 100)
        ];
    }
}
