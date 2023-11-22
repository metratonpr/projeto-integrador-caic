<?php

namespace App\Http\Controllers;

use App\Models\PriceList;
use App\Http\Requests\StorePriceListRequest;
use App\Http\Requests\UpdatePriceListRequest;
use Inertia\Inertia;

class PriceListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('PriceLists/Index', [
            'priceLists' => PriceList::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('PriceLists/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePriceListRequest $request)
    {
        $validatedData = $request->validated();

        $priceList = PriceList::create($validatedData);

        return redirect()->route('price-lists.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('PriceLists/Show', [
            'priceList' => PriceList::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render(
            'PriceLists/Edit',
            [
                'priceList' => PriceList::findOrFail($id),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePriceListRequest $request, $id)
    {
        $priceList = PriceList::findOrFail($id);

        $validatedData = $request->validated();

        $priceList->update($validatedData);

        return redirect()->route('price-lists.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $priceList = PriceList::findOrFail($id);

        $delete = $priceList->delete();

        if ($delete) {
            return redirect()->route('price-lists.index');
        }

        return abort(500);
    }
}
