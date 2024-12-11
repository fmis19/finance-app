<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InOutCat extends Model
{
    protected $table = 'in_out_cats';
 
    protected $primaryKey = 'in_out_cat_id';
 
    protected $fillable = [
        'type',
        'name'
    ];

    public $timestamps = false;

    public function transactions()
    {
        return $this->hasMany(Transaction::class, 'in_out_cat_id', 'in_out_cat_id');
    }

    public function budgets()
    {
        return $this->hasMany(Budget::class, 'in_out_cat_id', 'in_out_cat_id');
    }
}
