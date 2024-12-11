<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        DB::statement("
        CREATE TABLE SAVINGS (
            saving_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            item_id INT NOT NULL,
            amount_saved DECIMAL(12, 2) NOT NULL DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (item_id) REFERENCES WISHLIST(item_id) ON DELETE CASCADE ON UPDATE CASCADE
        );
    ");
    }

    public function down()
    {
        DB::statement("DROP TABLE IF EXISTS SAVINGS;");
    }
};
