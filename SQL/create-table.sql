CREATE TABLE Departments (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(100)
)

CREATE TABLE Employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    salary INT,
    department_id INT REFERENCES Departments(id)
)

INSERT INTO Departments (department_name) VALUES
('Engineering'),
('HR');

INSERT INTO Employees (name, salary, department_id) VALUES
('Rahul', 18000, 1),
('Hrishabh', 88000, 2);
('Neha',22000,3)

-- INNER JOIN

SELECT e.name, d.department
from Employees e
INNER JOIN Departments d
on e.department_id = d.id

-- LEFT JOIN 

SELECT e.name, d.department_name
from Employees e
LEFT JOIN Departments d
on e.department_id = d.id

-- RIGHT JOIN

SELECT e.name, d.department_name
FROM Employees e
RIGHT JOIN Departments d
on e.department_id = d.id

-- FIND EMPLOYEES WITH SALARY GREATER THAN 20000

SELECT e.name, e.salary 
from Employees e
where salary > 20000

