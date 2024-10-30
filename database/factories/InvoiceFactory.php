<?php

namespace Database\Factories;

use App\Models\OrderGroup;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Invoice>
 */
class InvoiceFactory extends Factory
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
            'client' => fake()->name(),
            'rfc' => fake()->regexify('[A-Z]{4}[0-9]{6}[A-Z0-9]{3}'),
            'tax_domicile' => fake()->address(),
            'payment_mode' => fake()->word(),
            'tax_folio' => fake()->regexify('[A-Z0-9]{10,12}'),
            'voucher_number' => fake()->numberBetween(1),
            'voucher_date' => fake()->date(),
            'cfdi_date' => fake()->date()
        ];
    }
}
