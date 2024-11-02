<?php

namespace App\Http\Controllers;

use App\Models\Dish;
use App\Models\OrderGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrderGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('OrderGroups/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $dishes = Dish::select(['id', 'name'])
            ->with([
                'variants:id,dish_id,name,price',
                'variants.dish:id,name'
            ])
        ->get();

        return Inertia::render('OrderGroups/Create', compact('dishes'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(OrderGroup $orderGroup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrderGroup $orderGroup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OrderGroup $orderGroup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderGroup $orderGroup)
    {
        //
    }
}
