<?php

namespace App\Http\Controllers;

use App\Models\ZipCode;
use App\Http\Requests\StoreZipCodeRequest;
use App\Http\Requests\UpdateZipCodeRequest;
use App\Models\City;
use App\Models\Neighborhood;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ZipCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('ZipCodes/Index', [
            'zip_codes' =>
            ZipCode::with(['user:id,name','city:id,name','neighborhood:id,name'])->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('ZipCodes/Create',[
            'cities' => City::select('id', 'name as label')->orderBy('name')->get(),
            'neighborhoods' => Neighborhood::select('id', 'name as label')->orderBy('name')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreZipCodeRequest $request)
    {
        $zip_code = $request->validated();


        $create = $request->user()->zipcodes()->create($zip_code);

        if ($create) {
            return redirect()->route('zip-codes.index');
        }
        return abort(500);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('ZipCodes/Show', [
            'zip_codes' => ZipCode::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render(
            'ZipCodes/Edit',
            [
                'zip_code' => ZipCode::findOrFail($id),
                'cities' => City::select('id', 'name as label')->orderBy('name')->get(),
                'neighborhoods' => Neighborhood::select('id', 'name as label')->orderBy('name')->get(),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateZipCodeRequest $request, $id)
    {
        // Encontra o state a ser atualizado
        $zip_code = ZipCode::findOrFail($id);

        //  $this->authorize('update', $zip_code);

        // Valida os dados do formulário usando UpdatestateRequest
        $validatedData = $request->validated();

        // Atualize outros campos com os dados validados
        $zip_code->update($validatedData);

        return redirect()->route('zip-codes.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($zip_code)
    {
        $zip_code = ZipCode::where('zipcode','like',$zip_code);

        // $this->authorize('delete', $zip_code);

        $delete = $zip_code->delete();

        if ($delete) {
            return redirect()->route('zip-codes.index');
        }

        return abort(500);
    }


    public function search($zip_code)
    {
        $zip_codes = ZipCode::where('zipcode', $zip_code)
            ->with(['neighborhood:id,name', 'city:id,name,state_id','city.state:id,name' ])
            ->get();

        return response()->json($zip_codes);
    }
}
