<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\ProductType;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Products/Index', [
            'products' => Product::with(['user:id,name', 'product_type:id,name'])->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Products/Create', [
            'product_types' => ProductType::select('id', 'name as label')->orderBy('name')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $validatedData = $request->validated();

        $create = $request->user()->products()->create($validatedData);
        if ($create) {

            return redirect()->route('products.index');
        }
        return abort(500);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('Products/Show', [
            'product' => Product::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render(
            'Products/Edit',
            [
                'product' => Product::findOrFail($id),
                'product_types' => ProductType::select('id', 'name as label')->orderBy('name')->get(),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, $id)
    {
        $product = Product::findOrFail($id);

        $validatedData = $request->validated();

        $product->update($validatedData);

        return redirect()->route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        $delete = $product->delete();

        if ($delete) {
            return redirect()->route('products.index');
        }

        return abort(500);
    }
}
