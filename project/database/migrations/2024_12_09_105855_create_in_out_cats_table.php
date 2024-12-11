<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        DB::statement("
        CREATE TABLE IN_OUT_CATS (
            in_out_cat_id INT AUTO_INCREMENT PRIMARY KEY,
            type ENUM('income', 'outcome'), 
            name VARCHAR(100) NOT NULL
        );
    ");
    }

    public function down()
    {
        DB::statement("DROP TABLE IF EXISTS IN_OUT_CATS;");
    }
};
