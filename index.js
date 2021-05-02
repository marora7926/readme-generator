// Pckages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'version',
        message: 'What is the project version (if applicable, otherwise write v1.0)?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What licence/s does the project have?',
    },
    {
        type: 'input',
        name: 'intro',
        message: 'Explain briefly, what is this project about?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What is your motivation for this project?',
    },
    {
        type: 'input',
        name: 'userStory',
        message: 'What does the user need to know about your using this repo (user story?',
    },
    {
        type: 'input',
        name: 'acceptCriteria',
        message: 'What is the acceptance criteria for this project?',
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        default: "npm i",
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: "npm test",
    },
    {
        type: 'checkbox',
        name: 'tech',
        message: 'What technologies were used for this project?',
        choices: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node", "NPM"]
    },
    {
        type: 'input',
        name: 'deployedLink',
        message: 'Enter your deployed URL:',
    },
    {
        type: 'input',
        name: 'wireframe',
        message: 'Enter your wireframe/branching tree link:',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Enter your landing page screenshot:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub link',
    },
  ])
    //   this will return a promise 
  .then((answers) => {
    const readMeContent = generateMarkdown(answers); //this is our generateMarkdown method, which will return a template of string using our template.
    fs.writeToFile("./assets/readme/README.md", readMeContent, (err) => { err // using file system to write our readme file and also added an call back function, error.
        ? console.log(err)
        : console.log("Successfully generated README.md!")
    });
});


// // Function to write README file
// function writeToFile(fileName, data) {}

// // Function to initialize app
// function init() {}

// // Function call to initialize app
// init();