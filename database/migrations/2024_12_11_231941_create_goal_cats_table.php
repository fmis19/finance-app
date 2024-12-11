<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("
            CREATE TABLE GOAL_CATS (
                goal_cat_id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL
            );
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement("DROP TABLE IF EXISTS GOAL_CATS;");
    }
};
