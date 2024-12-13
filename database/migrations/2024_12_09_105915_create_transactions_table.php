<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        DB::statement("
        CREATE TABLE TRANSACTIONS (
            transaction_id INT AUTO_INCREMENT PRIMARY KEY,      -- Jedinstveni identifikator transakcije
            user_id INT NOT NULL,                               -- Veza prema korisniku
            in_out_cat_id INT NOT NULL,                         -- Veza prema kategoriji (income/outcome)
            amount DECIMAL(12, 2) NOT NULL,                     -- Iznos transakcije
            description TEXT NULL,                                   -- Opis transakcije
            priority ENUM('low', 'medium', 'high') NOT NULL,    -- Stupanj prioriteta
            transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Datum i vrijeme transakcije
            FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (in_out_cat_id) REFERENCES IN_OUT_CATS(in_out_cat_id) ON DELETE CASCADE ON UPDATE CASCADE
            );
    ");
    }

    public function down()
    {
        DB::statement("DROP TABLE IF EXISTS TRANSACTIONS;");
    }
};
