<?php

use App\Http\Controllers\InventoryGroupController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\OrderGroupController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('order-groups', OrderGroupController::class)->only([
        'index', 'create', 'store', 'show', 'update'
    ]);
    Route::resource('inventory-groups', InventoryGroupController::class)->only([
        'index', 'show', 'edit', 'update', 'destroy', 'create', 'store'
    ]);
    Route::resource('invoices', InvoiceController::class);
});

require __DIR__.'/auth.php';
