<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'transactions';

    protected $primaryKey = 'transaction_id';

    protected $fillable = [
        'user_id',
        'in_out_cat_id',
        'amount',
        'description',
        'priority',
        'transaction_date'
    ];

    protected $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function inOutCat()
    {
        return $this->belongsTo(InOutCat::class, 'in_out_cat_id', 'in_out_cat_id');
    }
}
