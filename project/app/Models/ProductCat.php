<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCat extends Model
{
    protected $table = 'product_cats';

    protected $primaryKey = 'product_cat_id';

    protected $fillable = ['name'];

    protected $timestamps = false;

    public function wishlistItems()
    {
        return $this->hasMany(Wishlist::class, 'product_cat_id', 'product_cat_id');
    }
}
