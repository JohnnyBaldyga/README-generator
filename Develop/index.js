// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: Object.keys(licenses)
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
