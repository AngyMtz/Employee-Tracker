
//Requires
const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table')

//Creating the connection to the SQL Database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employees_db'
})

//Connection to the Database and Server
connection.connect(function(err){
    if (err) throw err;
    options();
})

//List of options for user to choose from
function options() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Welcome to The Employee Database. Please choose and option:',
            choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',                  
                    'Add A Department',
                    'Add A Role',
                    'Add An Employee',                    
                    //'Update Employee Role',
                    //'Delete An Employee',
                    'EXIT'
                    ]
            }).then(function (answer) {
                switch (answer.action) {
                    case 'View All Departments':
                        viewDepartments();                        
                        break;
                    case 'View All Roles':
                        viewRoles();
                        break;
                    case 'View All Employees':
                        viewEmployees();                        
                        break;
                    case 'Add A Department':
                        addDepartment();
                        break;
                    case 'Add A Role':
                        addRole();
                        break;
                    case 'Add An Employee':
                        addEmployee();
                        break;
                    case 'Update Employee Role':
                        updateRole();
                        break;
                    case 'Delete An Employee':
                        deleteEmployee();
                        break;
                    case 'EXIT': 
                        exitApp();
                        break;
                    default:
                        break;
                }
        })
};

// Function to view all of the Employees in the Database
function viewEmployees() {
    var query = 'SELECT * FROM employee';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log(res.length + ' Employees Found.');
        console.table('All Employees:', res); 
        options();
    })
};

// Function to view All of the Departments in the Database
function viewDepartments() {
    var query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
        if(err)throw err;
        console.table('All Departments:', res);
        options();
    })
};

// Function to view all of the Roles in the Database
function viewRoles() {
    var query = 'SELECT * FROM role';
    connection.query(query, function(err, res){
        if (err) throw err;
        console.table('All Roles:', res);
        options();
    })
};

// Function to Add an Employee to the Database
function addEmployee() {
    connection.query('SELECT * FROM role', function (err, res) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: 'first_name',
                    type: 'input', 
                    message: "Please enter Employee's First Name: ",
                },
                {
                    name: 'last_name',
                    type: 'input', 
                    message: "Please enter Employee's Last Name: "
                },
                {
                    name: 'manager_id',
                    type: 'input', 
                    message: "Please enter Employee's Manager ID "
                },
                {
                    name: 'role', 
                    type: 'list',
                    choices: function() {
                    var roleArray = [];
                    for (let i = 0; i < res.length; i++) {
                        roleArray.push(res[i].title);
                    }
                    return roleArray;
                    },
                    message: "Please enter Employees Role: "
                }
                ]).then(function (answer) {
                    let role_id;
                    for (let a = 0; a < res.length; a++) {
                        if (res[a].title == answer.role) {
                            role_id = res[a].id;
                            console.log(role_id)
                        }                  
                    }  
                    connection.query(
                    'INSERT INTO employee SET ?',
                    {
                        first_name: answer.first_name,
                        last_name: answer.last_name,
                        manager_id: answer.manager_id,
                        role_id: role_id,
                    },
                    function (err) {
                        if (err) throw err;
                        console.log('The Employee has been added.');
                        options();
                    })
                })
        })
};

// Function to add a Department to the Database
function addDepartment() {
    inquirer
        .prompt([
            {
                name: 'newDepartment', 
                type: 'input', 
                message: 'Please add a Department'
            }
            ]).then(function (answer) {
                connection.query(
                    'INSERT INTO department SET ?',
                    {
                        name: answer.newDepartment
                    });
                var query = 'SELECT * FROM department';
                connection.query(query, function(err, res) {
                if(err)throw err;
                console.log('The department has been added.');
                console.table('All Departments:', res);
                options();
                })
            })
};

// Function to add a Role to the Database
function addRole() {
    connection.query('SELECT * FROM department', function(err, res) {
        if (err) throw err;
    
        inquirer 
        .prompt([
            {
                name: 'new_role',
                type: 'input', 
                message: "Please add a New Role: "
            },
            {
                name: 'salary',
                type: 'input',
                message: 'Please add the salary of the New Role (Enter A Number):'
            },
            {
                name: 'Department',
                type: 'list',
                choices: function() {
                    var deptArry = [];
                    for (let i = 0; i < res.length; i++) {
                    deptArry.push(res[i].name);
                    }
                    return deptArry;
                },
            }
        ]).then(function (answer) {
            let department_id;
            for (let a = 0; a < res.length; a++) {
                if (res[a].name == answer.Department) {
                    department_id = res[a].id;
                }
            }
    
            connection.query(
                'INSERT INTO role SET ?',
                {
                    title: answer.new_role,
                    salary: answer.salary,
                    department_id: department_id
                },
                function (err, res) {
                    if(err)throw err;
                    console.log('The New Role has been added.');
                    console.table('All Roles:', res);
                    options();
                })
        })
    })
};

// Function that updates a Role in the Database
function updateRole() {

};

// Function that Deletes an Employee
function deleteEmployee() {

};

// Function that exits the app
function exitApp() {
    connection.end();
};