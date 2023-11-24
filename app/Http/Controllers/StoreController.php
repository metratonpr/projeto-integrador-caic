<?php

namespace App\Http\Controllers;

use App\Models\Store;
use App\Http\Requests\StoreStoreRequest;
use App\Http\Requests\UpdateStoreRequest;
use App\Models\Address;
use App\Models\ZipCode;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Stores/Index', [
            'stores' => Store::with(['user:id,name', 'zipcode:id,place'])->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Stores/Create',[
            'zip_codes' => ZipCode::select('id', 'place as label')->orderBy('place')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStoreRequest $request)
    {
        $validatedData = $request->validated();

        $create = $request->user()->stores()->create($validatedData );

        if ($create) {
            return redirect()->route('stores.index');
        }
        return abort(500);

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('Stores/Show', [
            'store' => Store::with('address')->findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render(
            'Stores/Edit',
            [
                'store' => Store::findOrFail($id),
                'zip_codes' => ZipCode::select('id', 'place as label')->orderBy('place')->get(),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStoreRequest $request, $id)
    {
        $store = Store::findOrFail($id);

        $validatedData = $request->validated();

        $store->update($validatedData);

        return redirect()->route('stores.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $store = Store::findOrFail($id);

        $delete = $store->delete();

        if ($delete) {
            return redirect()->route('stores.index');
        }

        return abort(500);
    }
}
