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


SELECT * FROM Departments