<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use App\Http\Resources\TransactionResource;
use App\Models\InOutCat;
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
        // $transactions = TransactionResource::collection(Transaction::where('user_id', Auth::user()->user_id)->get());
        $transactions = DB::table('transactions')
                            ->select('transaction_id as id', 'type', 'name', 'amount', 'description', 'priority', 'transaction_date as date')
                            ->join('in_out_cats', 'transactions.in_out_cat_id', 'in_out_cats.in_out_cat_id')
                            ->where('user_id', Auth::user()->user_id)->get();
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
        $incomes = InOutCat::where('type', 'income')->get();
        $expenses = InOutCat::where('type', 'expense')->get();
        return Inertia::render('Transaction/Create', ['incomes' => $incomes, 'expenses' => $expenses]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTransactionRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::user()->user_id;

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
    public function edit(Transaction $transaction)
    {
        //
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
    public function destroy(Transaction $transaction)
    {
        //
    }
}
