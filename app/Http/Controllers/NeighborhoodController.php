<?php

namespace App\Http\Controllers;

use App\Models\Neighborhood;
use App\Http\Requests\StoreNeighborhoodRequest;
use App\Http\Requests\UpdateNeighborhoodRequest;
use Inertia\Inertia;

class NeighborhoodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Neighborhoods/Index', [
            'neighborhoods' =>
            Neighborhood::with(['user:id,name'])->latest()->get(),

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Neighborhoods/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNeighborhoodRequest $request)
    {
        $neighborhoods = $request->validated();

        $create = $request->user()->neighborhoods()->create($neighborhoods);

        if ($create) {
            return redirect()->route('neighborhoods.index');
        }
        return abort(500);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('Neighborhoods/Show', [
            'neighborhood' => Neighborhood::findOrFail($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render('Neighborhoods/Edit', [
            'neighborhood' => Neighborhood::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNeighborhoodRequest $request, $id)
    {
       // Encontra o state a ser atualizado
       $neighborhood = Neighborhood::findOrFail($id);

       //  $this->authorize('update', $neighborhood);

       // Valida os dados do formulário usando UpdatestateRequest
       $validatedData = $request->validated();

       // Atualize outros campos com os dados validados
       $neighborhood->update($validatedData);

       return redirect()->route('neighborhoods.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
       $neighborhood = Neighborhood::findOrFail($id);

        // $this->authorize('delete',$neighborhood);

        $delete =$neighborhood->delete();

        if ($delete) {
            return redirect()->route('neighborhoods.index');
        }

        return abort(500);
    }
}
