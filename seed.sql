USE employees_db;

INSERT INTO department (name)
VALUES 
('Research and Development'),
('Human Resources'),
('Accounting'),
('Legal Department'),
('Security'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Web Site Developer', 175000, 1),
('Engineer', 160000, 2),
('Accountant', 95000, 3),
('Lawyer', 140000, 4),
('Manager', 85000, 5),
('Sales Representative', 35000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Norma', 'Martinez', 1, 1001),
('Larry', 'Emory', 2, 7007),
('Mara', 'Moreno', 3, 2002),
('Hector', 'Damian', 4, 3003),
('Fernanda', 'Martinez', 5, 4004),
('Iliana', 'Frickleton', 6, 5005);
