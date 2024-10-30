<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShippingBreakdown extends Model
{
    /** @use HasFactory<\Database\Factories\ShippingBreakdownFactory> */
    use HasFactory;

    public function orderGroup(): BelongsTo
    {
        return $this->belongsTo(OrderGroup::class);
    }
}
