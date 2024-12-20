<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Saving extends Model
{
    protected $table = 'savings';

    protected $primaryKey = 'saving_id';

    protected $fillable = [
        'user_id',
        'item_id',
        'amount_saved',
        'created_at',
        'updated_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function goalCategory()
    {
        return $this->belongsTo(GoalCat::class, 'goal_cat_id', 'goal_cat_id');
    }
}
