<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DatabaseSeederTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_seed(): void
    {
        $this->seed();

        $this->assertDatabaseCount('dishes', 10);
        $this->assertDatabaseCount('variants', 56);
    }
}
