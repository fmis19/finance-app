<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        DB::statement("
        CREATE TABLE SAVINGS (
            saving_id INT AUTO_INCREMENT PRIMARY KEY,        -- Jedinstveni identifikator štednje
            user_id INT NOT NULL,                            -- Veza prema korisniku
            goal_cat_id INT NOT NULL,                            -- Veza prema proizvodu na listi želja
            amount_saved DECIMAL(12, 2) NOT NULL DEFAULT 0,  -- Trenutno ušteđeni iznos za proizvod
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Vrijeme početka štednje
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Vrijeme zadnjeg ažuriranja
            FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (goal_cat_id) REFERENCES GOAL_CATS(goal_cat_id) ON DELETE CASCADE ON UPDATE CASCADE
            );
    ");
    }

    public function down()
    {
        DB::statement("DROP TABLE IF EXISTS SAVINGS;");
    }
};
