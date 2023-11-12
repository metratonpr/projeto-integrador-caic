<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBudgetRequest extends FormRequest
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
            'number' => 'required|unique:budgets,number',
            'budget_date' => 'required|date',
            'expiration_date' => 'required|date',
            'delivery_date' => 'required|date',
            'shipping_value' => 'required|numeric',
            'address_id' => 'required|exists:addresses,id',
            'budget_type_id' => 'required|exists:budget_types,id',
        ];
    }
}