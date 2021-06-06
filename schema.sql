-- If the employees_db exists drop it
DROP DATABASE IF EXISTS employees_db;

-- Create the employees_db
CREATE DATABASE employees_db;

-- Use the employees_db
USE employees_db;


-- Department table is created
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    -- Hold Department name
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Roles table is created
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    -- Role Title
    title VARCHAR(30) NOT NULL,
    -- Role Salary
    salary DECIMAL NOT NULL,
    -- Reference to Department Role
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

-- Employees table is created
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    -- First Name
    first_name VARCHAR(30) NOT NULL,
    -- Last Name
    last_name VARCHAR(30) NOT NULL,
    -- Role ID
    role_id INT NOT NULL,
    -- Manager ID
    manager_id INT NULL,
    PRIMARY KEY (id)
);