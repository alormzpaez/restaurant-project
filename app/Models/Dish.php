<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Dish extends Model
{
    /** @use HasFactory<\Database\Factories\DishFactory> */
    use HasFactory;

    public function variants(): HasMany
    {
        return $this->hasMany(Variant::class);
    }

    public function inventoryItems(): MorphMany
    {
        return $this->morphMany(InventoryItem::class, 'inventory_itemable');
    }
}
