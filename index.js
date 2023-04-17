const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var generatedTeam = [];

// Array of objects containing questions for createManager function
const managerQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter your office number.',
        name: 'office',
    },
];

// Array of objects containing questions for createEngineer function
const engQuestions = [
    {
        type: 'input',
        message: "What is this team member's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
        validate: (res) => {
            if (isNaN(res)) {
                return 'Employee IDs are numbers only.'
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please enter their email address.',
        name: 'email',
      },
    {
        type: 'input',
        message: 'Please enter their GitHub username.',
        name: 'github',
    },
];

// Array of objects containing questions for createIntern function
const intQuestions = [
    {
        type: 'input',
        message: "What is this team member's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter their email address.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter the name of their school.',
        name: 'school',
    },
];

const menu = // Object containing main menu options
    {
        type: 'list',
        message: "Select the type of team member would you like to add.",
        name: 'role',
        choices: ['Engineer', 'Intern', 'Done adding members'],
    };

// Function to call inquirer with option to add additional members
function createTeam () {
    inquirer.prompt(menu).then((res) => {
        switch(res.role){
            case 'Engineer':
                return createEngineer();
            case 'Intern':
                return createIntern();
            case 'Done adding members':
                return createHTML(generatedTeam);
        }
    });
}

// Function to call inquirer with manager questions
function createManager () {
    inquirer.prompt(managerQuestions).then((res) => {
        const managerData = new Manager(
            res.name,
            res.id,
            res.email,
            res.office
        );
    generatedTeam.push(managerData);
    createTeam();
    });
}

// Function to call inquirer with engineer questions
function createEngineer() {
    inquirer.prompt(engQuestions).then((res) => {
        const engineerData = new Engineer(
            res.name,
            res.id,
            res.email,
            res.github
        );
    generatedTeam.push(engineerData);
    createTeam();
    });
}

// Function to call inquirer with intern questions
function createIntern() {
    inquirer.prompt(intQuestions).then((res) => {
        const internData = new Intern(
            res.name,
            res.id,
            res.email,
            res.school
        );
    generatedTeam.push(internData);
    createTeam();
    });
}

// Function to write README file
function writeToFile(data) {
    fs.writeFileSync('./dist/index.html', data, (err) =>
    err ? console.log(err) : console.log('Created successfully'));
    return;
}

// Function for boiler plate HTML text and inserting card info
function createHTML (team) {
    var htmlContent = `<!DOCTYPE html>
    <html lang="en-us">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
        <link rel="icon" href="./icon.png">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="banner">
            <h1 class="display-3">My Team</h1>
        </header>
        <section class="container">
            <div class="row align-items-center">
                ${createCard(team)}
            </div>
        </section>
    
    </body>
    </html>`
    return writeToFile(htmlContent);
}

// Function to create HTML cards containing teammate info
function createCard (team) {
    var cardContent = '';
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager'){
                cardContent += `<div class="card col-3">
                <div class = "cardHead">
                    <h3>${team[i].name}</h3>
                    <h5>☕ Manager</h5>
                </div>
                <div class = "cardBody">
                    <li class="list-group-item">ID: ${team[i].id}</li>
                    <li class="list-group-item">Email: ${team[i].email}</li>
                    <li class="list-group-item">Office #: ${team[i].office}</li>
                </div>
            </div>`;
        } else if (team[i].getRole() === 'Engineer'){
                cardContent +=  `<div class="card col-3">
                <div class = "cardHead">
                    <h3>${team[i].name}</h3>
                    <h5>👓 Engineer</h5>
                </div>
                <div class = "cardBody">
                    <li class="list-group-item">ID: ${team[i].id}</li>
                    <li class="list-group-item">Email: ${team[i].email}</li>
                    <li class="list-group-item">GitHub: ${team[i].github}</li>
                </div>
            </div>`;
        } else if (team[i].getRole() === 'Intern'){ 
                cardContent +=  `<div class="card col-3">
                <div class = "cardHead">
                    <h3>${team[i].name}</h3>
                    <h5>🎓 Intern</h5>
                </div>
                <div class = "cardBody">
                    <li class="list-group-item">ID: ${team[i].id}</li>
                    <li class="list-group-item">Email: ${team[i].email}</li>
                    <li class="list-group-item">School: ${team[i].school}</li>
                </div>
            </div>`;
        }
        }
    return cardContent;
    }

// Function to initialize app
function init() {
    createManager();
}

// Function call to initialize app
init();