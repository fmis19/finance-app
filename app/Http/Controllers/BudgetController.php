<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBudgetRequest;
use App\Http\Requests\UpdateBudgetRequest;
use App\Models\Budget;
use App\Models\InOutCat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userId = Auth::user()->user_id;

        $budgets = DB::select("
            SELECT name
            FROM budgets
            JOIN in_out_cats ON budgets.in_out_cat_id = in_out_cats.in_out_cat_id
            WHERE budgets.user_id = ?
            GROUP BY name
        ", [$userId]);

        return Inertia::render('Budget/Index', [
            "budgets" => $budgets,
            "success" => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $expenses = InOutCat::where('type', 'expense')->orderBy('name')->get();
        return Inertia::render('Budget/Create', [
            "expenses" => $expenses
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBudgetRequest $request)
    {
        // dd($request);
        $data = $request->validated();
        $data['user_id'] = Auth::user()->user_id;

        Budget::create($data);

        return to_route('budget.index')->with('success', 'Budget was set.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Budget $budget)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Budget $budget)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBudgetRequest $request, Budget $budget)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Budget $budget)
    {
        //
    }
}
