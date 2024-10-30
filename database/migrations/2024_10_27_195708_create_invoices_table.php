<?php

use App\Models\OrderGroup;
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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(OrderGroup::class);
            $table->string('client');
            $table->string('rfc');
            $table->text('tax_domicile');
            $table->string('payment_mode');
            $table->string('tax_folio');
            $table->integer('voucher_number');
            $table->date('voucher_date');
            $table->enum('payment_method', [
                'cash',
                'card'
            ])->default('cash');
            $table->date('cfdi_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
