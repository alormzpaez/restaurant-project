<?php

namespace App\Http\Requests;

use App\Models\OrderGroup;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreOrderGroupRequest extends FormRequest
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
            'apply_invoice' => 'required|boolean',
            'delivery_type' => [
                'required',
                'string',
                Rule::in([
                    OrderGroup::RESIDENCE_DELIVERY_TYPE,
                    OrderGroup::RESTAURANT_DELIVERY_TYPE
                ])
            ],
            'payment_method' => [
                'required',
                'string',
                Rule::in([
                    OrderGroup::CASH_PAYMENT_METHOD,
                    OrderGroup::CARD_PAYMENT_METHOD
                ])
            ],
            'order_items' => 'required|array',
            'order_items.*' => 'required|array',
            'order_items.*.quantity' => 'required|integer|numeric',
            'order_items.*.variant_id' => 'required|integer|numeric'
        ];
    }
}
