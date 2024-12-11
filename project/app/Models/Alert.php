<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alert extends Model
{
    protected $table = 'alerts';

    protected $primaryKey = 'alert_id';

    protected $fillable = [
        'user_id',
        'alert_message',
        'type',
        'status',
        'created_at'
    ];

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}
