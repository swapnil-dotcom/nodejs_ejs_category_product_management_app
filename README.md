Before Executing the project user may have to perform following task

first user have to create database test_db with following command

create database test_db;

then, user have to create two tables in that database one is for categories and another is for products
but before that we have to access the created database

use test_db

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);
