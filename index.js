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
        message: 'What is your project name? (add a hypen if more than one word)',
    },
    {
        type: 'input',
        name: 'version',
        message: 'What is the project version (if applicable, otherwise write v1.0)?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licence do the project have?',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
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
        name: 'gUsername',
        message: 'What is your github id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email id?',
    },
  ])
    // this will return a promise 
  .then((answers) => {
    const readMeContent = generateMarkdown(answers); //this is our generateMarkdown method, which will return a template of string using our template.
    fs.writeFile("./assets/readme/README.md", readMeContent, (err) => { err // using file system to write our readme file and also added an call back function, error.
        ? console.log(err)
        : console.log("Successfully generated README.md!")
    });
});