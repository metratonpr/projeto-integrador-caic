<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Http\Requests\StoreCityRequest;
use App\Http\Requests\UpdateCityRequest;
use App\Models\State;
use Inertia\Inertia;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Cities/Index', [
            'cities' =>
            City::with(['user:id,name', 'state:id,name'])->latest()->get(),

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Cities/Create', [
            'states' => State::select('id', 'name as label')->orderBy('name')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCityRequest $request)
    {
        $city = $request->validated();

        $create = $request->user()->cities()->create($city);

        if ($create) {
            return redirect()->route('cities.index');
        }
        return abort(500);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('Cities/Show', [
            'city' => City::findOrFail($id),
            'states' => State::select('id', 'name as label')->orderBy('name')->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render(
            'Cities/Edit',
            [
                'city' => City::findOrFail($id),
                'states' => State::select('id', 'name as label')->orderBy('name')->get(),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCityRequest $request, $id)
    {
        // Encontra o state a ser atualizado
        $city = City::findOrFail($id);

        //  $this->authorize('update', $city);

        // Valida os dados do formulário usando UpdatestateRequest
        $validatedData = $request->validated();

        // Atualize outros campos com os dados validados
        $city->update($validatedData);

        return redirect()->route('cities.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $city = City::findOrFail($id);

        // $this->authorize('delete', $city);

        $delete = $city->delete();

        if ($delete) {
            return redirect()->route('cities.index');
        }

        return abort(500);
    }
}
