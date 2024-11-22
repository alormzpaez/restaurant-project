<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class InventoryItem extends Model
{
    /** @use HasFactory<\Database\Factories\InventoryItemFactory> */
    use HasFactory;

    public const AVAILABLE_STATUS = 'available';
    public const LIMITED_STATUS = 'limited';
    public const UNAVAILABLE_STATUS = 'unavailable';
    public const STATUS = [
        self::AVAILABLE_STATUS,
        self::LIMITED_STATUS,
        self::UNAVAILABLE_STATUS
    ];

    protected $fillable = [
        'inventory_itemable_type',
        'inventory_itemable_id',
        'remaining_quantity',
        'made_quantity',
        'useful_quantity',
        'sold_quantity',
    ];

    public function inventoryGroup(): BelongsTo
    {
        return $this->belongsTo(InventoryGroup::class);
    }

    public function inventoryItemable(): MorphTo
    {
        return $this->morphTo();
    }
}
