<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    protected $table = 'goal';

    protected $primaryKey = 'goal_id';
    
    protected $fillable = [
        'user_id',
        'goal_cat_id',
        'goal_name',
        'price',
        'priority',
        'created_at'
    ];

    protected $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function goalCategory()
    {
        return $this->belongsTo(GoalCat::class, 'goal_cat_id', 'goal_cat_id');
    }
}