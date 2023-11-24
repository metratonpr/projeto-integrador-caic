<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateZipCodeRequest extends FormRequest
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
        $zipCodeId = $this->route('zip_code');

        return [
            'zipcode' => [
                'required',
                Rule::unique('zip_codes', 'zipcode')->ignore($zipCodeId),
            ],
            'place' => 'required|string',
            'city_id' => 'required|exists:cities,id',
            'neighborhood_id' => 'required|exists:neighborhoods,id',
        ];
    }
}
