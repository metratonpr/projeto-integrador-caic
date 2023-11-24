<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateStoreRequest extends FormRequest
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
        $storeId = $this->route('store');

        return [
            'name' => 'required',
            'contact' => 'nullable|string', // Adicione suas regras de validação específicas aqui
            'email' => [
                'nullable',
                'email',
                Rule::unique('stores', 'email')->ignore($storeId), // Validação de e-mail único, ignorando o registro atual
            ],
            'phone' => 'nullable|string', // Adicione suas regras de validação específicas aqui
            'cnpj' => 'nullable|string', // Adicione suas regras de validação específicas aqui
            'number' => 'nullable|string', // Adicione suas regras de validação específicas aqui
            'complement' => 'nullable|string', // Adicione suas regras de validação específicas aqui
            'zip_code_id' => 'required|exists:zip_codes,id',
        ];
    }
}
