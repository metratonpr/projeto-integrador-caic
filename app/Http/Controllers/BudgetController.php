<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use App\Http\Requests\StoreBudgetRequest;
use App\Http\Requests\UpdateBudgetRequest;
use Inertia\Inertia;

class BudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Budgets/Index', [
            'budgets' =>
            Budget::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Budgets/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBudgetRequest $request)
    {
        $validatedData = $request->validated();

        // Cria um novo orçamento
        $budget = $request->user()->budgets()->create($validatedData['budget']);

        // Adiciona os BudgetDetails relacionados
        $budgetDetails = $validatedData['budget']['budget_details'];
        if ($budgetDetails) {
            $budget->budgetDetails()->createMany($budgetDetails);
        }

        return redirect()->route('budgets.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('Budgets/Show', [
            'budget' => Budget::with('budgetDetails')->findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render(
            'Budgets/Edit',
            [
                'budget' => Budget::with('budgetDetails')->findOrFail($id),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBudgetRequest $request, $id)
    {
        $budget = Budget::findOrFail($id);

        $validatedData = $request->validated();

        // Atualiza outros campos com os dados validados
        $budget->update($validatedData['budget']);

        // Atualiza os BudgetDetails relacionados
        $budgetDetails = $validatedData['budget']['budget_details'];
        if ($budgetDetails) {
            $budget->budgetDetails()->delete(); // Exclui os antigos BudgetDetails
            $budget->budgetDetails()->createMany($budgetDetails);
        }

        return redirect()->route('budgets.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $budget = Budget::findOrFail($id);

        $delete = $budget->delete();

        if ($delete) {
            return redirect()->route('budgets.index');
        }

        return abort(500);
    }
}
