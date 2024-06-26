// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');
const path = require('path');

// license options
const licenses = {
    'MIT': {
        badge: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
        link: 'https://opensource.org/licenses/MIT'
    },
    'Apache 2.0': {
        badge: '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
        link: 'https://opensource.org/licenses/Apache-2.0'
    },
    'GPL 3.0': {
        badge: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
        link: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    'BSD 3-Clause': {
        badge: '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
        link: 'https://opensource.org/licenses/BSD-3-Clause'
    },
    'None': {
        badge: '',
        link: ''
    }
};
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
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        // Generate README content
        const content = 
`# ${answers.title}

${licenses[answers.license].badge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the [${answers.license}](${licenses[answers.license].link}) license.

## Questions
If you have any questions, please reach out to me:
- GitHub: [@${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;

        
        writeToFile('README.md', content.trim());

        console.log('README.md has been generated');
    });
}

// Function call to initialize app
init();
