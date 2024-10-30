<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Invoice extends Model
{
    /** @use HasFactory<\Database\Factories\InvoiceFactory> */
    use HasFactory;

    public const CASH_PAYMENT_METHOD = 'cash';
    public const CARD_PAYMENT_METHOD = 'card';

    protected $attributes = [
        'payment_method' => self::CASH_PAYMENT_METHOD
    ];

    public function orderGroup(): BelongsTo
    {
        return $this->belongsTo(OrderGroup::class);
    }
}
