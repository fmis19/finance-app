<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        DB::statement("
        CREATE TABLE ALERTS (
            alert_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            alert_message TEXT NOT NULL,
            type ENUM('budget_warning', 'advice') NOT NULL,
            status ENUM('unread', 'read') DEFAULT 'unread',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE ON UPDATE CASCADE
        );
    ");
    }

    public function down()
    {
        DB::statement("DROP TABLE IF EXISTS ALERTS;");
    }
};
