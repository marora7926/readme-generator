// Pckages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'project-name',
      message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'project-version',
        message: 'What is the project version (if applicable, otherwise write v1.0)?',
    },
    {
      type: 'input',
      name: 'brief-introduction',
      message: 'Explain briefly, what is this project about?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What is your motivation ofr this project?',
    },
    {
        type: 'input',
        name: 'user-story',
        message: 'What is the user story?',
    },
    {
        type: 'input',
        name: 'acceptance-criteria',
        message: 'What is the acceptance criteria for this project?',
    },
    {
      type: 'checkbox',
      name: 'tech',
      message: 'What technologies were used for this project?',
      choices: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node", "NPM"]
    },
    {
      type: 'input',
      name: 'license',
      message: 'What licence/s does the project have?',
    },
    {
        type: 'input',
        name: 'deployed-link',
        message: 'Enter your deployed URL:',
    },
    {
      type: 'input',
      name: 'wireframe',
      message: 'Enter your wireframe/brnaching tree link:',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Enter your landing page screenshot:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
  ])
  .then((answers) => {
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
