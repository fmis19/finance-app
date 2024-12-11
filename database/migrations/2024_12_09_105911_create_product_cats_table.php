<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        DB::statement("
        CREATE TABLE PRODUCT_CATS (
            product_cat_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL
        );
    ");
    }

    public function down()
    {
        DB::statement("DROP TABLE IF EXISTS PRODUCT_CATS;");
    }
};
