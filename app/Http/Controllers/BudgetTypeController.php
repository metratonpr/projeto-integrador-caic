<?php

namespace App\Http\Controllers;

use App\Models\BudgetType;
use App\Http\Requests\StoreBudgetTypeRequest;
use App\Http\Requests\UpdateBudgetTypeRequest;
use Inertia\Inertia;

class BudgetTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('BudgetTypes/Index', [
            'budgetTypes' => BudgetType::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('BudgetTypes/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBudgetTypeRequest $request)
    {
        $validatedData = $request->validated();

        $budgetType = BudgetType::create($validatedData);

        return redirect()->route('budget-types.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('BudgetTypes/Show', [
            'budgetType' => BudgetType::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render(
            'BudgetTypes/Edit',
            [
                'budgetType' => BudgetType::findOrFail($id),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBudgetTypeRequest $request, $id)
    {
        $budgetType = BudgetType::findOrFail($id);

        $validatedData = $request->validated();

        $budgetType->update($validatedData);

        return redirect()->route('budget-types.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $budgetType = BudgetType::findOrFail($id);

        $delete = $budgetType->delete();

        if ($delete) {
            return redirect()->route('budget-types.index');
        }

        return abort(500);
    }
}
