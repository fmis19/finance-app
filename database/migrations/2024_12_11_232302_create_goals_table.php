<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        DB::statement("
        CREATE TABLE GOALS (
            goal_id INT AUTO_INCREMENT PRIMARY KEY,              -- Jedinstveni identifikator proizvoda
            user_id INT NOT NULL,                                -- Veza prema korisniku
            goal_cat_id INT NOT NULL,                         -- Veza prema kategoriji proizvoda
            description TEXT NULL,
            price DECIMAL(12, 2) NOT NULL,                       -- Cijena proizvoda
            priority ENUM('low', 'medium', 'high') NOT NULL,     -- Stupanj prioriteta
            status ENUM('pending', 'accomplished') DEFAULT 'pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,      -- Datum kada je proizvod dodan na listu želja
            FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (goal_cat_id) REFERENCES GOAL_CATS(goal_cat_id) ON DELETE CASCADE ON UPDATE CASCADE
            );
    ");
    }

    public function down()
    {
        DB::statement("DROP TABLE IF EXISTS GOALS;");
    }
};
