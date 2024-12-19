<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BudgetController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/home', function(){
//     return Inertia::render('Home');
// })->middleware(['auth', 'verified'])->name('home');

// Test
// Route::get('/getUsers', [AdminController::class, 'getUsers'])->middleware('auth')->name('getUsers');


Route::middleware('auth')->group(function (){
    Route::get('/transactions', [TransactionController::class, 'index'])->name('transaction.index');
    Route::get('/add-transaction', [TransactionController::class, 'create'])->name('transaction.create');
    Route::post('/store-transaction', [TransactionController::class, 'store'])->name('transaction.store');
});

Route::middleware('auth')->group(function (){
    Route::get('/budgets', [BudgetController::class, 'index'])->name('budget.index');
    Route::get('/set-budget', [BudgetController::class, 'create'])->name('budget.create');
    Route::post('/store-budget', [BudgetController::class, 'store'])->name('budget.store');
});

Route::middleware(['auth', 'verified'])->group(function (){
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
