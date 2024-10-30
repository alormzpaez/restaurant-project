<?php

namespace Database\Factories;

use App\Models\OrderGroup;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ShippingBreakdown>
 */
class ShippingBreakdownFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'order_group_id' => OrderGroup::factory(),
            'address' => fake()->address(),
            'references' => fake()->paragraph(),
            'indications' => fake()->paragraph()
        ];
    }
}
