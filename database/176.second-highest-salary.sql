# Write your MySQL query statement below
SELECT max(Salary) as SecondHighestSalary from Employee
WHERE Salary < (SELECT max(Salary) from Employee)