<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateNeighborhoodRequest extends FormRequest
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
        //www.seusite.com/neighborhoods/1
        $neighborhoodId = $this->route('neighborhood');

        return [
            'name' => [
                'required',
                Rule::unique('neighborhoods', 'name')->ignore($neighborhoodId),
            ],
        ];
    }
}