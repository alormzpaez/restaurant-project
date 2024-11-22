<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class InventoryGroup extends Model
{
    /** @use HasFactory<\Database\Factories\InventoryGroupFactory> */
    use HasFactory;

    public const KITCHEN_TYPE = 'kitchen';
    public const PIZZA_TYPE = 'pizza';
    public const TYPES = [
        self::KITCHEN_TYPE,
        self::PIZZA_TYPE
    ];

    protected $fillable = [
        'type',
        'date'
    ];

    public function inventoryItems(): HasMany
    {
        return $this->hasMany(InventoryItem::class);
    }
}
