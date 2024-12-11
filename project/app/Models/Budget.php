<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Budget extends Model
{
    protected $table = 'budgets';

    protected $primaryKey = 'budget_id';
    
    protected $fillable = [
        'user_id',
        'in_out_cat_id',
        'amount',
        'month',
        'year',
        'created_at',
        'updated_at'
    ];
    
    public function inOutCat()
    {
        return $this->belongsTo(InOutCat::class, 'in_out_cat_id', 'in_out_cat_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}
