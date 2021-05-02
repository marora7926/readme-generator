// Pckages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
//   this will return a promise 
  .then((answers) => {
    const readMeContent = generateMarkdown(answers); //this is our generateMarkdown method, which will return a template of string using our template.
    fs.writeToFile("README.md", readMeContent, (err) => err // using file system to write our readme file and also added an call back function, error.
        ? console.log(err) 
        : console.log("Successfully generated README.md!")
    );
  });


// // Function to write README file
// function writeToFile(fileName, data) {}

// // Function to initialize app
// function init() {
//     inquirer
//         .prompt(questions)
// }

// // Function call to initialize app
// init();
