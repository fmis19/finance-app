<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        DB::statement("
        CREATE TABLE WISHLIST (
            item_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            product_cat_id INT NOT NULL,
            product_name VARCHAR(255) NOT NULL,
            price DECIMAL(12, 2) NOT NULL,
            priority ENUM('low', 'medium', 'high') NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (product_cat_id) REFERENCES PRODUCT_CATS(product_cat_id) ON DELETE CASCADE ON UPDATE CASCADE
        );
    ");
    }

    public function down()
    {
        DB::statement("DROP TABLE IF EXISTS WISHLIST;");
    }
};
