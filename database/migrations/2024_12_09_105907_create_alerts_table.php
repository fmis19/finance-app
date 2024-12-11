<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        DB::statement("
        CREATE TABLE ALERTS
            (
            alert_id INT AUTO_INCREMENT PRIMARY KEY,     -- Jedinstveni identifikator obavijesti
            user_id INT NOT NULL,                        -- Veza prema korisniku koji prima upozorenje
            message TEXT NOT NULL,                       -- Poruka upozorenja ili savjet
            type ENUM('budget_warning', 'advice') NOT NULL, -- Vrsta upozorenja ('budget_warning', 'advice')
            status ENUM('unread', 'read') DEFAULT 'unread', -- Status upozorenja (je li pročitano ili ne)
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Vrijeme stvaranja upozorenja
            FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE ON UPDATE CASCADE
            );
    ");
    }

    public function down()
    {
        DB::statement("DROP TABLE IF EXISTS ALERTS;");
    }
};
