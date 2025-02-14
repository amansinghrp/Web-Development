CREATE DATABASE XYZ;

USE XYZ;

CREATE TABLE employee(
	id int primary key,
    name varchar(50),
    salary int unsigned 
);

insert into employee(id, name, salary)
values
(1, "Adam", 25000),
(2, "Bob", 30000),
(3, "Ketty", 40000);

select * from employee;
