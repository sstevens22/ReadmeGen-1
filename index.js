// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");
const writeFileAsync = util.promisify(writeToFile);
const Giit = require("./Giit.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter a valid GitHub username.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the name of your GitHub repo?",
    name: "repo",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter a valid repository name.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A project title is recommended!");
      }
      return true;
    },
  },
  {
    type: "input",
    message:
      "If any, what are the installation steps required to run your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide usage instructions and examples for your project.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "If applicable, please describe how other developers can contribute to your project.",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "Provide any tests written for your application with examples on how to run them.",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    name: "license",
  },
  {
      type: "input",
      message: "provide your email address or other contact information.",
      name: "contact",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Completed!");
  });
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const userAnswers = await inquirer.prompt(questions);
    console.log("Your answers: ", userAnswers);
    console.log("Thank you! Fetching your GitHub data...");

    //Giit
    const userInfo = await Giit.getUser(userAnswers);
    console.log("Your GitHub info:", userInfo);

    //Generating
    console.log("Generating your README...");
    const markdown = generateMarkdown(userAnswers, userInfo);
    console.log(markdown);
   
    await writeFileAsync("yourNewREADME.md", markdown);
  } catch (error) {
    console.log(error);
  }
};

// Function call to initialize app
init();
