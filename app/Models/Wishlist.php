<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    protected $table = 'wishlist';

    protected $primaryKey = 'item_id';
    
    protected $fillable = [
        'user_id',
        'product_cat_id',
        'product_name',
        'price',
        'priority',
        'created_at'
    ];

    protected $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function productCategory()
    {
        return $this->belongsTo(ProductCat::class, 'product_cat_id', 'product_cat_id');
    }

    public function savings()
    {
        return $this->hasOne(Saving::class, 'item_id', 'item_id');
    }
}