<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = Auth::user()->user_id;

        $saldo = DB::table('transactions')
                    ->where('user_id', $user_id)
                    ->sum('amount');

        $budget_spent = DB::select("
        SELECT name, COALESCE(ABS(SUM(transactions.amount)), 0) as spent, COALESCE(budgets.amount, 0) as amount
            FROM in_out_cats
            LEFT JOIN transactions ON in_out_cats.in_out_cat_id = transactions.in_out_cat_id 
                AND transactions.user_id = ?
                AND MONTH(transaction_date) = MONTH(CURRENT_TIMESTAMP) 
                AND YEAR(transaction_date) = YEAR(CURRENT_TIMESTAMP)
            LEFT JOIN budgets ON in_out_cats.in_out_cat_id = budgets.in_out_cat_id
                AND budgets.user_id = ?
                AND month = MONTH(CURRENT_TIMESTAMP)
                AND year = YEAR(CURRENT_TIMESTAMP)
            WHERE type = ?
                AND (
                    budgets.amount IS NOT NULL
                    OR 
                    transactions.amount IS NOT NULL
                )
            GROUP BY name, budgets.amount
            ORDER BY name;
        ", [$user_id, $user_id, "expense"]);

        $transactions_made = DB::select("
            SELECT DATE(transaction_date) as date, CAST(ABS(SUM(amount)) AS FLOAT) as amount
            FROM transactions
            JOIN in_out_cats USING(in_out_cat_id)
            WHERE user_id = ?
                AND type = ?
            GROUP BY DATE(transaction_date);
        ", [$user_id, "expense"]);

        return Inertia::render('Dashboard/Index', [
            "saldo" => $saldo,
            "budget_spent" => $budget_spent,
            "transactions_made" => $transactions_made
        ]);
    }

    public function getTransactions(Request $request){
        $user_id = Auth::user()->user_id;
        $month = 11;
        $year = 2024;

        $transactions = DB::select("
            SELECT DATE(transaction_date) as date, ABS(SUM(amount)) as amount
            FROM transactions
            JOIN in_out_cats USING(in_out_cat_id)
            WHERE user_id = ?
                AND type = ?
                AND MONTH(transaction_date) = ?
                AND YEAR(transaction_date) = ?
            GROUP BY DATE(transaction_date);
        ", [$user_id, "expense", $month, $year]);
        return response()->json();
    }

    public function getBudgets(Request $request){
        $user_id = Auth::user()->user_id;
        $validated = $request->validate([
            'month' => ['required', 'integer', 'between:1,12'],
            'year' => ['required', 'integer', 'min:1900', 'max:2100'],
        ]);

        $month = $validated['month'];
        $year = $validated['year'];

        $budget_spent = DB::select("
        SELECT name, COALESCE(ABS(SUM(transactions.amount)), 0) as spent, COALESCE(budgets.amount, 0) as amount
            FROM in_out_cats
            LEFT JOIN transactions ON in_out_cats.in_out_cat_id = transactions.in_out_cat_id 
                AND transactions.user_id = ?
                AND MONTH(transaction_date) = ?
                AND YEAR(transaction_date) = ?
            LEFT JOIN budgets ON in_out_cats.in_out_cat_id = budgets.in_out_cat_id
                AND budgets.user_id = ?
                AND month = ?
                AND year = ?
            WHERE type = ?
                AND (
                    budgets.amount IS NOT NULL
                    OR 
                    transactions.amount IS NOT NULL
                )
            GROUP BY name, budgets.amount
            ORDER BY name;
        ", [$user_id, $month, $year, $user_id, $month, $year, "expense"]);

        return Inertia::render('Dashboard/Partials/BudgetsPart', [
            "budget_spent" => $budget_spent
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
