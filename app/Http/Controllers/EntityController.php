<?php

namespace App\Http\Controllers;

use App\Models\Entity;
use App\Http\Requests\StoreEntityRequest;
use App\Http\Requests\UpdateEntityRequest;
use App\Models\Neighborhood;
use App\Models\State;
use Inertia\Inertia;

class EntityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Entities/Index', [
            'entities' => Entity::with(['user:id,name'])->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Entities/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEntityRequest $request)
    {
        $validatedData = $request->validated();

        $create = $request->user()->entities()->create($validatedData);

        if ($create) {
            return redirect()->route('entities.index');
        }
        return abort(500);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('Entities/Show', [
            'entity' => Entity::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render(
            'Entities/Edit',
            [
                'entity' => Entity::findOrFail($id),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEntityRequest $request, $id)
    {
        $entity = Entity::findOrFail($id);

        $validatedData = $request->validated();

        $entity->update($validatedData);

        return redirect()->route('entities.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $entity = Entity::findOrFail($id);

        $delete = $entity->delete();

        if ($delete) {
            return redirect()->route('entities.index');
        }

        return abort(500);
    }


    public function addresses(Entity $entity)
    {

        return Inertia::render('Addresses/Index', [
            'addresses' => $entity->addresses,
            'entity' => $entity,
        ]);
    }

    public function create_address(Entity $entity)
    {
        return Inertia::render('Addresses/Create', [
            'entity' => $entity,
            'states' => State::select('id', 'name as label')->orderBy('name')->get(),
            'neighborhoods' => Neighborhood::select('id', 'name as label')->orderBy('name')->get()
        ]);
    }
}
