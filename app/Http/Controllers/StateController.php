<?php

namespace App\Http\Controllers;

use App\Models\State;
use App\Http\Requests\StoreStateRequest;
use App\Http\Requests\UpdateStateRequest;
use Inertia\Inertia;

class StateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('States/Index', [
            'states' =>
            State::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('States/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStateRequest $request)
    {
        $state = $request->validated();

        $create = $request->user()->states()->create($state);

        if ($create) {
            return redirect()->route('states.index');
        }
        return abort(500);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('States/Show', [
            'state' => State::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render(
            'States/Edit',
            [
                'state' => State::findOrFail($id),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStateRequest $request, $id)
    {
         // Encontra o state a ser atualizado
         $state = State::findOrFail($id);

        //  $this->authorize('update', $state);

         // Valida os dados do formulário usando UpdatestateRequest
         $validatedData = $request->validated();

         // Atualize outros campos com os dados validados
         $state->update($validatedData);

         return redirect()->route('states.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
         $state = State::findOrFail($id);

        // $this->authorize('delete', $state);

        $delete = $state->delete();

        if ($delete) {
            return redirect()->route('states.index');
        }

        return abort(500);
    }
}
