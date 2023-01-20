-- using the database

use nodecrud;

-- creating a table
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
     adress VARCHAR(100) NOT NULL,
     phone VARCHAR(30)
);

-- show all tables

SHOW TABLES;

describe customer;
