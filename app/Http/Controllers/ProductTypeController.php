<?php

namespace App\Http\Controllers;

use App\Models\ProductType;
use App\Http\Requests\StoreProductTypeRequest;
use App\Http\Requests\UpdateProductTypeRequest;
use Inertia\Inertia;

class ProductTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('ProductTypes/Index', [
            'productTypes' => ProductType::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('ProductTypes/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductTypeRequest $request)
    {
        $validatedData = $request->validated();

        $productType = ProductType::create($validatedData);

        return redirect()->route('product-types.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('ProductTypes/Show', [
            'productType' => ProductType::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render(
            'ProductTypes/Edit',
            [
                'productType' => ProductType::findOrFail($id),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductTypeRequest $request, $id)
    {
        $productType = ProductType::findOrFail($id);

        $validatedData = $request->validated();

        $productType->update($validatedData);

        return redirect()->route('product-types.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $productType = ProductType::findOrFail($id);

        $delete = $productType->delete();

        if ($delete) {
            return redirect()->route('product-types.index');
        }

        return abort(500);
    }
}
