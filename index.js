// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: "What is your GitHub username?",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid GitHub username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid repository name.");
            }
            return true;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log("Completed!")
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
