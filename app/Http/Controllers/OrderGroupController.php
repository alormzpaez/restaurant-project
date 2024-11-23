<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderGroupRequest;
use App\Models\Dish;
use App\Models\OrderGroup;
use App\Models\Variant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class OrderGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $orderGroups = OrderGroup::select([
            'id',
            'apply_invoice',
            'status',
            'total'
        ])->get();

        return Inertia::render('OrderGroups/Index', compact('orderGroups'));
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
    public function store(StoreOrderGroupRequest $request)
    {
        DB::beginTransaction();

        $orderGroup = OrderGroup::create([
            ...$request->only([
                'apply_invoice',
                'delivery_type',
                'payment_method'
            ]),
            'total' => 0
        ]);

        $total = 0;
        
        foreach ($request->validated('order_items') as $requestedOrderItem) {
            $variant = Variant::findOrFail($requestedOrderItem['variant_id']);

            $subtotal = $requestedOrderItem['quantity'] * $variant->price;
            $total += $subtotal;
            
            $orderGroup->orderItems()->create([
                ...$requestedOrderItem,
                'subtotal' => $subtotal
            ]);
        }

        $orderGroup->update([
            'total' => $total
        ]);

        if ($request->validated('apply_invoice')) {
            $orderGroup->invoice()->create([
                'client' => $request->validated('client'),
                'rfc' => '',
                'tax_domicile' => '',
                'payment_mode' => '',
                'tax_folio' => '',
                'voucher_number' => 0,
                'voucher_date' => now(), 
                'cfdi_date' => now(),
                'payment_method' => $request->validated('payment_method')
            ]);
        }

        DB::commit();

        return to_route('order-groups.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(OrderGroup $orderGroup): Response
    {
        $orderGroup->load([
            'orderItems.variant:id,dish_id,name,price',
            'orderItems.variant.dish:id,name',
            'invoice:id,client,order_group_id'
        ]);

        return Inertia::render('OrderGroups/Show', [
            'orderGroup' => [
                'id' => $orderGroup->id,
                'invoice' => $orderGroup->invoice,
                'apply_invoice' => $orderGroup->apply_invoice,
                'delivery_type' => $orderGroup->delivery_type,
                'status' => $orderGroup->status,
                'total' => $orderGroup->total,
                'orderItems' => $orderGroup->orderItems->map(function ($orderItem) {
                    return [
                        'id' => $orderItem->id,
                        'variant' => $orderItem->variant,
                        'quantity' => $orderItem->quantity,
                    ];
                })->toArray()
            ]
        ]);
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
        $orderGroup->update([
            'status' => $request['status']
        ]);

        return to_route('order-groups.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderGroup $orderGroup)
    {
        //
    }
}
