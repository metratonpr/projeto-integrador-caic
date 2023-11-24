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
            'product_types' => ProductType::latest()->get(),
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

        $create = $request->user()->product_types()->create($validatedData);

        return redirect()->route('product-types.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('ProductTypes/Show', [
            'product_type' => ProductType::findOrFail($id),
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
                'product_type' => ProductType::findOrFail($id),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductTypeRequest $request, $id)
    {
        $product_type = ProductType::findOrFail($id);

        $validatedData = $request->validated();

        $product_type->update($validatedData);

        return redirect()->route('product-types.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product_type = ProductType::findOrFail($id);

        $delete = $product_type->delete();

        if ($delete) {
            return redirect()->route('product-types.index');
        }

        return abort(500);
    }
}
