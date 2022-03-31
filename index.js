const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern"); 

const generateHTML = require("./src/generateHTML")

const teamMembers = []

const createManager = () => {
    return inquirer.prompt ( [
        {
            type: "input",
            name: "name",
            message: "What is your name?",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Please enter your name");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is your employee ID?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("Please enter your ID");
                    return false;
                }
            }    
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter a valid email address.");
                    return false;
                }
            }    
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
            validate: officeNumber => {
                if  (officeNumber) {
                    return true; 
                } else {
                    console.log("Please enter your office number.");
                    return false;
                }
            }
        },    
    ]).then(anwers => {
        console.log(answers);
        const manager = new Manager (anwers.name, anwers.id, anwers.email, anwers.officeNumber);
        teamMembers.push(manager);
        promptQuestions();
    })
};


createManager();