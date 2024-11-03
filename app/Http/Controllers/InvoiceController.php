<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInvoiceRequest;
use App\Http\Requests\UpdateInvoiceRequest;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $invoices = Invoice::select([
            'id',
            'created_at',
            'client'
        ])
            ->orderByDesc('created_at')
        ->get();

        return Inertia::render('Invoices/Index', compact('invoices'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Invoices/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInvoiceRequest $request)
    {
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Invoice $invoice): Response
    {
        $invoice->load('orderGroup');

        $total = $invoice->orderGroup->total;
        $iva = $total * .16;
        $subtotal = $total - $iva;
        
        return Inertia::render('Invoices/Show', [
            'invoice' => [
                'id' => $invoice->id,
                'order_group_id' => $invoice->order_group_id,
                'client' => $invoice->client,
                'rfc' => $invoice->rfc,
                'tax_domicile' => $invoice->tax_domicile,
                'payment_mode' => $invoice->payment_mode,
                'tax_folio' => $invoice->tax_folio,
                'voucher_number' => $invoice->voucher_number,
                'voucher_date' => $invoice->voucher_date,
                'payment_method' => $invoice->payment_method,
                'cfdi_date' => $invoice->cfdi_date,
                'created_at' => $invoice->created_at,
                'updated_at' => $invoice->updated_at,
                'subtotal' => $subtotal,
                'iva' => $iva,
                'total' => $total
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Invoice $invoice): Response
    {
        $invoice->load('orderGroup');

        $total = $invoice->orderGroup->total;
        $iva = $total * .16;
        $subtotal = $total - $iva;
        
        return Inertia::render('Invoices/Edit', [
            'invoice' => [
                'id' => $invoice->id,
                'order_group_id' => $invoice->order_group_id,
                'client' => $invoice->client,
                'rfc' => $invoice->rfc,
                'tax_domicile' => $invoice->tax_domicile,
                'payment_mode' => $invoice->payment_mode,
                'tax_folio' => $invoice->tax_folio,
                'voucher_number' => $invoice->voucher_number,
                'voucher_date' => $invoice->voucher_date,
                'payment_method' => $invoice->payment_method,
                'cfdi_date' => $invoice->cfdi_date,
                'created_at' => $invoice->created_at->format('Y-m-d'),
                'updated_at' => $invoice->updated_at,
                'subtotal' => $subtotal,
                'iva' => $iva,
                'total' => $total
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInvoiceRequest $request, Invoice $invoice)
    {
        $invoice->update($request->validated());

        return to_route('invoices.show', $invoice->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invoice $invoice)
    {
        $invoice->delete();

        return to_route('invoices.index');
    }
}
