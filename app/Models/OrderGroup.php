<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class OrderGroup extends Model
{
    /** @use HasFactory<\Database\Factories\OrderGroupFactory> */
    use HasFactory;

    public const RESIDENCE_DELIVERY_TYPE = 'residence';
    public const RESTAURANT_DELIVERY_TYPE = 'restaurant';
    public const CASH_PAYMENT_METHOD = 'cash';
    public const CARD_PAYMENT_METHOD = 'card';
    public const UNFINISHED_STATUS = 'unfinished';
    public const FINISHED_STATUS = 'finished';
    public const CANCELLED_STATUS = 'cancelled';

    protected $attributes = [
        'delivery_type' => self::RESTAURANT_DELIVERY_TYPE,
        'payment_method' => self::CASH_PAYMENT_METHOD,
        'status' => self::UNFINISHED_STATUS
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'apply_invoice',
        'total',
        'delivery_type',
        'payment_method'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'apply_invoice' => 'boolean'
    ];

    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function invoice(): HasOne
    {
        return $this->hasOne(Invoice::class);
    }

    public function shippingBreakdown(): HasOne
    {
        return $this->hasOne(ShippingBreakdown::class);
    }

    public function customer(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
