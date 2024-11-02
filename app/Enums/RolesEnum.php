<?php

namespace App\Enums;

enum RolesEnum: string
{
    case Manager = 'manager';
    case Customer = 'customer';

    public function label(): string
    {
        return match ($this) {
            static::Manager => 'Managers',
            static::Customer => 'Customers'
        };
    }
}
