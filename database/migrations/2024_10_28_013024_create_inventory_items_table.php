<?php

use App\Models\InventoryGroup;
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
        Schema::create('inventory_items', function (Blueprint $table) {
            $table->id();
            $table->string('inventory_itemable_type');
            $table->unsignedBigInteger('inventory_itemable_id');
            $table->foreignIdFor(InventoryGroup::class);
            $table->integer('remaining_quantity')->nullable();
            $table->integer('made_quantity')->nullable();
            $table->integer('useful_quantity')->nullable();
            $table->integer('sold_quantity');
            $table->enum('status', [
                'available',
                'limited',
                'unavailable'
            ]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventory_items');
    }
};
