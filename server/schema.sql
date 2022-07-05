-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
DROP DATABASE IF EXISTS cowsDB;
CREATE DATABASE cowsDB;
USE cowsDB;
-- CREATE YOUR TABLES
CREATE TABLE cows (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
)