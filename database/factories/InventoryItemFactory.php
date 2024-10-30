<?php

namespace Database\Factories;

use App\Models\InventoryGroup;
use App\Models\InventoryItem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InventoryItem>
 */
class InventoryItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'inventory_group_id' => InventoryGroup::factory(),
            'sold_quantity' => fake()->numberBetween(1, 10),
            'status' => fake()->randomElement(InventoryItem::STATUS)
        ];
    }
}
