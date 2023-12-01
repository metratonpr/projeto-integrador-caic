<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Http\Requests\StoreAddressRequest;
use App\Http\Requests\UpdateAddressRequest;
use App\Models\Entity;
use App\Models\ZipCode;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AddressController extends Controller
{
    public function addresses(Entity $entity)
    {

        $addresses = Address::where('entity_id', $entity->id)->with('zipcode','zipcode.city')->latest()->get();
        return Inertia::render('Addresses/Index', [
            'addresses' => $addresses,
            'entity' => $entity,
        ]);
    }

    public function create_address(Entity $entity)
    {
        return Inertia::render('Addresses/Create', [
            'entity' => $entity
        ]);
    }


    public function store(StoreAddressRequest $request, Entity $entity)
    {
        $data = $request->validated();

        $data['entity_id'] = $entity->id;


        $create = $request->user()->addresses()->create($data);

        if ($create) {
            return redirect()->route('entities.addresses',['entity' => $entity]);
        }
        return abort(500);
    }

     /**
     * Show the form for editing the specified resource.
     */
    public function edit($id, Entity $entity)
    {
        $address = Address::findOrFail($id);
        $zip_code = ZipCode::findOrFail($address->zipcode_id);

        return Inertia::render('Addresses/Edit', [
            'address' => $address,
            'entity' => $entity,
            'zip_code' => $zip_code
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAddressRequest $request, $id)
    {

        // Encontra o state a ser atualizado
        $address = Address::findOrFail($id);

        $entity = Entity::findOrFail($address->entity_id);

        //  $this->authorize('update', $address);

        // Valida os dados do formulário usando UpdatestateRequest
        $validatedData = $request->validated();
        // Atualize outros campos com os dados validados
        $address->update($validatedData);


        return redirect()->route('entities.addresses',['entity' => $entity]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $address = Address::findOrFail($id);

        $entity = Entity::findOrFail($address->entity_id);

        // $this->authorize('delete', $address);

        $delete = $address->delete();

        if ($delete) {
            return redirect()->route('entities.addresses',['entity' => $entity]);
        }

        return abort(500);
    }




}
