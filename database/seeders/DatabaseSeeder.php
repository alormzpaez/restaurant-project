<?php

namespace Database\Seeders;

use App\Models\Dish;
use App\Models\Ingredient;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleAndPermissionSeeder::class);
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
        ]);

        // Creating ingredients
        Ingredient::create(['name' => 'Arrachera']);
        Ingredient::create(['name' => 'Pollo']);
        Ingredient::create(['name' => 'Chistorra']);
        Ingredient::create(['name' => 'Pan Hambs.']);
        Ingredient::create(['name' => 'Pan Bags.']);
        Ingredient::create(['name' => 'Papas']);
        Ingredient::create(['name' => 'Chuleta']);
        Ingredient::create(['name' => 'Molida']);
        Ingredient::create(['name' => 'Asada']);
        Ingredient::create(['name' => 'Pastor']);
        Ingredient::create(['name' => 'Fettuccine']);
        Ingredient::create(['name' => 'Carne hambs.']);

        // Creating dishes and their variants
        Dish::create([
            'name' => 'Pizza grande'
        ])->variants()->createMany([
            ['name' => 'Suprema especial', 'price' => 150.00],
            ['name' => 'Chistorra', 'price' => 140.00],
            ['name' => 'Buffalo chicken', 'price' => 145.00],
            ['name' => 'Pollo a la BBQ', 'price' => 145.00],
            ['name' => 'Pollo', 'price' => 135.00],
            ['name' => 'BBQ especial', 'price' => 150.00],
            ['name' => 'Carne asada', 'price' => 160.00],
            ['name' => 'Arrachera', 'price' => 160.00],
            ['name' => 'Al pastor', 'price' => 140.00],
            ['name' => 'Española', 'price' => 145.00]
        ]);

        Dish::create([
            'name' => 'Pizza chica'
        ])->variants()->createMany([
            ['name' => 'Suprema especial', 'price' => 80.00],
            ['name' => 'Chistorra', 'price' => 75.00],
            ['name' => 'Buffalo chicken', 'price' => 78.00],
            ['name' => 'Pollo a la BBQ', 'price' => 78.00],
            ['name' => 'Pollo', 'price' => 70.00],
            ['name' => 'BBQ especial', 'price' => 80.00],
            ['name' => 'Carne asada', 'price' => 85.00],
            ['name' => 'Arrachera', 'price' => 85.00],
            ['name' => 'Al pastor', 'price' => 75.00],
            ['name' => 'Española', 'price' => 78.00]
        ]);

        Dish::create([
            'name' => 'Hamburguesa'
        ])->variants()->createMany([
            ['name' => 'Sencilla', 'price' => 60.00],
            ['name' => 'Al Gratín', 'price' => 65.00],
            ['name' => 'Hawaiana', 'price' => 70.00],
            ['name' => 'Texana', 'price' => 75.00],
            ['name' => 'Arrachera', 'price' => 80.00],
            ['name' => 'Chorizo', 'price' => 70.00],
            ['name' => 'Pollo', 'price' => 65.00]
        ]);

        Dish::create([
            'name' => 'Baguette'
        ])->variants()->createMany([
            ['name' => 'Arrachera', 'price' => 85.00],
            ['name' => 'Chuleta', 'price' => 80.00],
            ['name' => 'Pollo', 'price' => 75.00],
            ['name' => 'Salchicha', 'price' => 70.00],
            ['name' => 'Carnes frías', 'price' => 85.00],
            ['name' => 'Chorizo', 'price' => 72.00],
            ['name' => 'Hawaiano', 'price' => 78.00],
            ['name' => 'Chistorra', 'price' => 80.00],
            ['name' => 'Asada', 'price' => 85.00]
        ]);

        Dish::create([
            'name' => 'Queso fundido'
        ])->variants()->createMany([
            ['name' => 'Chistorra', 'price' => 90.00]
        ]);

        Dish::create([
            'name' => 'Alambre'
        ])->variants()->createMany([
            ['name' => 'Pollo', 'price' => 100.00],
            ['name' => 'Arrachera', 'price' => 110.00]
        ]);

        Dish::create([
            'name' => 'Corte'
        ])->variants()->createMany([
            ['name' => 'Arrachera', 'price' => 200.00]
        ]);

        Dish::create([
            'name' => 'Mollete'
        ])->variants()->createMany([
            ['name' => 'Salchicha', 'price' => 35.00],
            ['name' => 'Chorizo', 'price' => 40.00],
            ['name' => 'Jamón', 'price' => 30.00],
            ['name' => 'Tocino', 'price' => 45.00],
            ['name' => 'Champiñones', 'price' => 50.00],
            ['name' => 'Pepperoni', 'price' => 55.00],
            ['name' => 'Mixto', 'price' => 60.00],
            ['name' => 'Pollo', 'price' => 40.00],
            ['name' => 'Arrachera', 'price' => 65.00],
            ['name' => 'Asada', 'price' => 55.00]
        ]);

        Dish::create([
            'name' => 'Pasta'
        ])->variants()->createMany([
            ['name' => 'A la mantequilla', 'price' => 80.00],
            ['name' => 'Al Gratín', 'price' => 85.00],
            ['name' => 'Del mar', 'price' => 100.00],
            ['name' => 'De camarón', 'price' => 110.00],
            ['name' => 'Pollo con champiñón', 'price' => 95.00]
        ]);

        Dish::create([
            'name' => 'Ensalada'
        ])->variants()->createMany([
            ['name' => 'César con pollo', 'price' => 70.00]
        ]);
    }
}
