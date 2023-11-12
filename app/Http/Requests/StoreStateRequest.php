<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStateRequest extends FormRequest
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
            'name' => 'required',
            'description' => 'nullable|string', // Adicione suas regras de validação específicas aqui
            'warranty' => 'nullable|string', // Adicione suas regras de validação específicas aqui
            'warranty_time' => 'nullable|numeric|min:0', // Adicione suas regras de validação específicas aqui
            'product_type_id' => 'required|exists:product_types,id',
        ];
    }
}