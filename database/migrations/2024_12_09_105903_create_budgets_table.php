<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        DB::statement("
        CREATE TABLE BUDGETS (
            budget_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            in_out_cat_id INT NOT NULL,
            amount DECIMAL(12, 2) NOT NULL,
            month INT NOT NULL,
            year INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (in_out_cat_id) REFERENCES IN_OUT_CATS(in_out_cat_id) ON DELETE CASCADE ON UPDATE CASCADE
        );
    ");
    }

    public function down()
    {
        DB::statement("DROP TABLE IF EXISTS BUDGETS;");
    }
};
