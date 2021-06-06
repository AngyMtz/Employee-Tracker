Norma Martinez
06.02.2021
Unit 12 MySQL Homework: Employee Tracker

For this assignment I attempted to create a Content Management System (CMS).  It was my goal to build a solution for managing a company's employees using node, inquirer and MySQL.  I used this design for my database schema:

* department:

  * id - INT PRIMARY KEY
  * name - VARCHAR(30) to hold department name

* role:

  * id - INT PRIMARY KEY
  * title -  VARCHAR(30) to hold role title
  * salary -  DECIMAL to hold role salary
  * department_id -  INT to hold reference to department role belongs to

* employee:

  * id - INT PRIMARY KEY
  * first_name - VARCHAR(30) to hold employee first name
  * last_name - VARCHAR(30) to hold employee last name
  * role_id - INT to hold reference to role employee has
  * manager_id - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

Using this I attempted to build a command-line application that at a minimum allows the user to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

I had hoped to be able to accomplish some of the bonuses, but at this point it proved to be too daunting of a task.  I did use a seed file to populate my database.  One problem I ran into was that it displays the information in the database multiple times.  I hope to be able to continue working on this to make it function as required.  I know I didn't do multiple commits.  Once I started coding it felt wrong to upload something that I was unable to get running at least the bare minimum.

## Screenshots

![image1](https://user-images.githubusercontent.com/78131360/120918025-246d3500-c667-11eb-9877-80e858e3b494.png)
![image2](https://user-images.githubusercontent.com/78131360/120918027-2505cb80-c667-11eb-801b-6f445cddc08a.png)
![image3](https://user-images.githubusercontent.com/78131360/120918028-259e6200-c667-11eb-83a3-5a0d35af9d1d.png)

