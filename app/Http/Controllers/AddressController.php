<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Http\Requests\StoreAddressRequest;
use App\Http\Requests\UpdateAddressRequest;
use Inertia\Inertia;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Addresses/Index', [
            'addresses' => Address::with('zipCode', 'entity')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Addresses/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAddressRequest $request)
    {
        $validatedData = $request->validated();

        $address = Address::create($validatedData);

        return redirect()->route('addresses.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('Addresses/Show', [
            'address' => Address::with('zipCode', 'entity')->findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render(
            'Addresses/Edit',
            [
                'address' => Address::findOrFail($id),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAddressRequest $request, $id)
    {
        $address = Address::findOrFail($id);

        $validatedData = $request->validated();

        $address->update($validatedData);

        return redirect()->route('addresses.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $address = Address::findOrFail($id);

        $delete = $address->delete();

        if ($delete) {
            return redirect()->route('addresses.index');
        }

        return abort(500);
    }
}
