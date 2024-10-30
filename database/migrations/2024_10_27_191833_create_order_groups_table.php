<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_groups', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')
                ->nullable()
                ->constrained('users');
            $table->boolean('apply_invoice');
            $table->float('total');
            $table->enum('delivery_type', [
                'residence',
                'restaurant'
            ])->default('restaurant');
            $table->enum('payment_method', [
                'cash',
                'card'
            ])->default('cash');
            $table->enum('status', [
                'unfinished',
                'finished',
                'cancelled'
            ])->default('unfinished');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_groups');
    }
};
