<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateEntityRequest extends FormRequest
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
        $entitiesId = $this->route('entity');
        return [
            'name' => [
                'required',
                Rule::unique('entities', 'name')->ignore($entitiesId),
            ],
            'cpf_cnpj' => 'required|string', // Adicione suas regras de validação específicas aqui
            'rg_ie' => 'required|string', // Adicione suas regras de validação específicas aqui
            'email' =>  [
                'required',
                'email',
                Rule::unique('entities', 'email')->ignore($entitiesId),
            ], // Validação de e-mail único
            'phone' => 'nullable|string', // Adicione suas regras de validação específicas aqui
        ];
    }
}