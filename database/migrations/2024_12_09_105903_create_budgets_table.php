<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        DB::statement("
        CREATE TABLE BUDGETS (
            budget_id INT AUTO_INCREMENT PRIMARY KEY,        -- Jedinstveni identifikator budžeta
            user_id INT NOT NULL,                            -- ID korisnika koji postavlja budžet
            in_out_cat_id INT NOT NULL,                      -- ID kategorije (prihod ili rashod)
            amount DECIMAL(12, 2) NOT NULL,                  -- Iznos koji je korisnik odredio za budžet
            month INT NOT NULL,                              -- Mjesec za koji je postavljen budžet (1-12)
            year INT NOT NULL,                               -- Godina za koju je postavljen budžet
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Vrijeme kada je budžet kreiran
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  -- Vrijeme ažuriranja budžeta
            FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE ON UPDATE CASCADE,  -- Veza prema korisniku
            FOREIGN KEY (in_out_cat_id) REFERENCES IN_OUT_CATS(in_out_cat_id) ON DELETE CASCADE ON UPDATE CASCADE -- Veza prema kategoriji
            );
    ");
    }

    public function down()
    {
        DB::statement("DROP TABLE IF EXISTS BUDGETS;");
    }
};
