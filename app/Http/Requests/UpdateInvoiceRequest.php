<?php

namespace App\Http\Requests;

use App\Models\Invoice;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateInvoiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'client' => 'required|string',
            'rfc' => 'required|string',
            'tax_domicile' => 'required|string',
            'payment_mode' => 'required|string',
            'tax_folio' => 'required|string',
            'voucher_number' => 'required|numeric|integer',
            'voucher_date' => 'required|date',
            'payment_method' => [
                'required',
                'string',
                Rule::in([
                    Invoice::CARD_PAYMENT_METHOD,
                    Invoice::CASH_PAYMENT_METHOD
                ])
            ],
            'cfdi_date' => 'required|date'
        ];
    }
}
