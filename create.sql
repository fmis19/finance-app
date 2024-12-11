-- Users table
CREATE TABLE USERS
(
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  surname VARCHAR(150) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') NOT NULL,   -- Admin or User
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Income and Expense Categories
CREATE TABLE IN_OUT_CATS
(
  in_out_cat_id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('income', 'expense'), -- Category type (e.g., "Income", "Expense")
  name VARCHAR(100) NOT NULL   -- Category name (e.g., "Food", "Rent", etc.)
);

-- Budgets table
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


-- Alerts table
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


-- Goal Categories table
CREATE TABLE GOAL_CATS (
  goal_cat_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL, -- E.g., 'Emergency Funds', 'Travel', 'Retirement'
);


-- Transactions table
CREATE TABLE TRANSACTIONS (
  transaction_id INT AUTO_INCREMENT PRIMARY KEY,      -- Jedinstveni identifikator transakcije
  user_id INT NOT NULL,                               -- Veza prema korisniku
  in_out_cat_id INT NOT NULL,                         -- Veza prema kategoriji (income/outcome)
  amount DECIMAL(12, 2) NOT NULL,                     -- Iznos transakcije
  description TEXT NULL,                           -- Opis transakcije
  priority ENUM('low', 'medium', 'high') NOT NULL,    -- Stupanj prioriteta
  transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Datum i vrijeme transakcije
  FOREIGN KEY (user_id) REFERENCES USERS(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (in_out_cat_id) REFERENCES IN_OUT_CATS(in_out_cat_id) ON DELETE CASCADE ON UPDATE CASCADE
);


-- Goals table
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


-- Savings table
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
