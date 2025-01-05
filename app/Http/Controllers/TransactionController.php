<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use App\Http\Resources\TransactionResource;
use App\Models\InOutCat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = Auth::user()->user_id;
        $transactions = DB::select("
            SELECT transaction_id as id, type, name, amount, description, priority, transaction_date as date
            FROM transactions
            JOIN in_out_cats USING(in_out_cat_id)
            WHERE user_id = ?
            ORDER BY transaction_date DESC
        ", [$user_id]);
        // dd($transactions);
        return Inertia::render('Transaction/Index', [
            "transactions" => $transactions,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $incomes = DB::select("
            SELECT * 
            FROM in_out_cats
            WHERE type = ?
            ORDER BY name
        ", ["income"]);
        $expenses = DB::select("
            SELECT * 
            FROM in_out_cats
            WHERE type = ?
            ORDER BY name
        ", ["expense"]);
        return Inertia::render('Transaction/Create', ['incomes' => $incomes, 'expenses' => $expenses]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTransactionRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::user()->user_id;
        // dd($data);
        Transaction::create($data);

        return to_route('transaction.index')->with('success', 'Transaction was added.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        $transaction_id = $request->route('id');
        $user_id = Auth::user()->user_id;

        $transaction = DB::select("
            SELECT * 
            FROM transactions
            JOIN in_out_cats USING(in_out_cat_id)
            WHERE transactions.user_id = ? 
                AND transaction_id = ?
        ", [$user_id, $transaction_id]);

        $in_out_cats = DB::select("
            SELECT * 
            FROM in_out_cats
        ");

        return Inertia::render('Transaction/Edit', [
            "transaction" => $transaction,
            "in_out_cats" => $in_out_cats
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $transaction_id = $request->route('id');
        Transaction::destroy($transaction_id);
        
        return redirect()->route('transaction.index')->with('success', 'Transaction was deleted.');
    }
}
