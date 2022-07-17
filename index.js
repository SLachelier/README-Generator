// Packages needed for this application:
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path')
// An array that holds questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project that this README will be for? (Required)',
        validate: title => { //checks for entry
            if (title) {
                return true;
            } else {
                console.log('Please enter the name of your project!'); //displays if nothing is entered.
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for this project. (Required)',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please enter the description for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions for your project:',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('Please make an entry for the question.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage instructions for your project:',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('Please make an entry for the question.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please specify any contribution guidelines for your project. (Required)',
        validate: contributing => {
            if (contributing) {
                return true;
            } else {
                console.log('Please specify the contribution guidelines.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please specify the license being used for your project:',
        //An array of choices the user can choose from.
        choices: ['The Unlicense', 'Boost Software License 1.0', 'MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU LGPLv3', 'GNU GPLv3', 'GNU AGPLv3']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please write tests for your application with examples on how to run them. (Required)',
        validate: tests => {
            if (tests) {
                return true;
            } else {
                console.log('Please write tests for your application with any examples.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username: (Required)',
        validate: username => {
            if (username) {
                return true;
            } else {
                console.log('Please enter your username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address: (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email.');
                return false;
            }
        }
    }
];

// Writes the README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join('Generated_README', fileName), data)
}


function init() { //Calls writeToFile() and initializes the app.
    inquirer.prompt(questions).then((answers)=>{
    console.log(answers)
    writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize the app
init();
