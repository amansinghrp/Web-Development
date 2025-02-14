CREATE DATABASE College;

USE College;

CREATE TABLE students (
	id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT NOT NULL
);

INSERT INTO students VALUES(1, "Aman", 20);
INSERT INTO students VALUES(2, "Aakriti", 19);
SELECT * FROM students; 

insert into students(id, age, name) 
values
(3, 20, "Amarjot"),
(4, 19, "Keerat");


CREATE TABLE temp1(
	id INT UNIQUE
);

DROP table students;

use college;

CREATE TABLE student(
	rollno int primary key,
    name varchar(50),
    marks int not null,
    grade varchar(1),
    city varchar(20)
);

insert into student
(rollno, name , marks, grade, city)
values
(101, "anil", 78, "C", "Jalandhar"),
(102, "bhumika", 93, "A", "Delhi"),
(103, "chetan", 85, "B", "mumbai"),
(104, "dhruv", 96, "A", "dehradun"),
(105, "emanual", 12, "F", "africa"),
(106, "farah", 82, "B", "delhi");

/*-------------------------------------------------*/

select city , avg(marks)
from student
group by city
order by avg(marks) asc;

use college;

create table department(
	id int primary key,
    name varchar(50)
);

create table teacher(
	id int primary key,
    name varchar(50),
    dept_id int,
    foreign key(dept_id) references department(id)    
);

alter table student
change column name full_name varchar(50);


set sql_safe_updates = 0;

delete from student
where marks < 80;


alter table student
drop column grade;
use college;

create table student(
	id int primary key,
    name varchar(50)
);

insert into student(id, name)
values
(102, "Aman"),
(105, "Keerat"),
(107, "Amarjot");

create table course(
	id int primary key,
    course varchar(50)
);

insert into course(id, course)
values
(102, "Computer Scinece"),
(107, "Aerospcae"),
(109, "Civil"),
(103, "Mechanical");

select * from student as s
inner join course as c
on s.id = c.id;

select * from student as s
left join course as c
on s.id = c.id;

select * from student as s
right join course as c
on s.id = c.id;


/*Full Join*/
select * from student as s
left join course as c
on s.id = c.id
union
select * from student as s
right join course as c
on s.id = c.id;


/*Left Exclusive Join*/
select * from student as s
left join course as c
on s.id = c.id
where c.id is NULL;

/*Right Exclusive Join*/
select * from student as s
right join course as c
on s.id = c.id
where s.id is NULL;

/*Full Exclusive Join*/
select * from student as s
left join course as c
on s.id = c.id
where c.id is NULL
union
select * from student as s
right join course as c
on s.id = c.id
where s.id is NULL;

/* Self Join */

create table employee(
	id int primary Key,
    name varchar(50),
    manager_id int
);

insert into employee(id, name, manager_id)
values
(101, "Adam", 103),
(102, "Bob", 104),
(103, "Casey", null),
(104, "Donald", 103);

select a.name, b.name as manager_name
from employee as a
join employee as b
on a.manager_id = b.id;

use college;
drop table student;

create table student(
	roll int primary key,
    name varchar(50),
    marks int,
    grade varchar(1),
    city varchar(20)
);

INSERT INTO student (roll, name, marks, grade, city)
VALUES
(101, 'anil', 78, 'C', 'Pune'),
(102, 'bhumika', 93, 'A', 'Mumbai'),
(103, 'chetan', 85, 'B', 'Mumbai'),
(104, 'dhruv', 96, 'A', 'Delhi'),
(105, 'emanuel', 12, 'F', 'Delhi'),
(106, 'farah', 82, 'B', 'Delhi');


/*Marks > average marks*/
select avg(marks) from student;

select name, marks 
from student
where marks > (select avg(marks) from student);

/* Even roll numbers studnets */
select roll , name 
from student
where roll % 2 = 0;

select roll, name , marks
from student
where roll in (select roll 
from student
where roll % 2 = 0);

select * from student;

/*Select max marks from delhi*/
select marks
from student 
where city = "Delhi";

select MAX(marks)
from (select marks from student where city = "Delhi") as temp;

/*VIEWS*/
CREATE VIEW teacherview as
select roll, name, marks 
from student;

select * from teacherview;

select * from teacherview
where marks > 85;

drop view teacherview;
/*----------------------------------------------------------*/