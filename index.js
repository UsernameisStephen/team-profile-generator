const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern"); 

const generateHTML = require("./src/generateHTML")

const teamMembers = []

const createManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?",
        },
        {
            type: "list",
            name: "addMember",
            message: "What type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I dont want to add any more team members"],
        }
    ])
    .then((managerChoices) => {
    
        const manager = new Manager(managerChoices.id, managerChoices.name, managerChoices.email, managerChoices.officeNumber)
        teamMembers.push(manager)
        switch(managerChoices.addMember) {
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            default: 
            writeToFile("./dist/index.html", generateHTML(teamMembers))
        }
    });
};

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineers name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineers id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
        },
        {
            type: "list",
            name: "addMember",
            message: "What type of team member would you like to add next?",
            choices: ["Engineer", "Intern", "I dont want to add any more team members"],
        }
    ])
    .then((engineerChoice) => {
        const engineer = new Engineer(engineerChoice.id, engineerChoice.name, engineerChoice.email, engineerChoice.github)
        teamMembers.push(engineer)
        switch(engineerChoice.addMember) {
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            default: 
            writeToFile("./dist/index.html", generateHTML(teamMembers))
        }
    })
};

const internQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        },
        {
            type: "list",
            name: "addMember",
            message: "Whatpe of team member would you like to add next?",
            choices: ["Engineer", "Intern", "I dont want to add any more team members"],
        }
    ])
    .then((internChoice) => {
        const intern = new Intern(internChoice.id, internChoice.name, internChoice.email, internChoice.school)
        teamMembers.push(intern)
        switch(internChoice.addMember){
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            default:
                writeToFile("./dist/index.html", generateHTML(teamMembers))
        }
    })
}

createManager();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log("file saved")
    });
};