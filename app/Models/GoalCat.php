<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoalCat extends Model
{
    protected $table = 'goal_cats';

    protected $primaryKey = 'goal_cat_id';

    protected $fillable = [
        'name',
        'description'
    ];

    protected $timestamps = false;

    public function goals()
    {
        return $this->hasMany(Goal::class, 'goal_cat_id', 'goal_cat_id');
    }

    public function savings()
    {
        return $this->hasMany(Saving::class, 'saving_id', 'saving_id');
    }
}
