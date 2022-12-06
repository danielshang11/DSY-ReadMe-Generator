// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// 1.title of my project and 2.sections entitled Description, 
// 3.Table of Contents, 4.Installation, 5.Usage,6. License,
//  7.Contributing, 8.Tests, and 9.Questions



const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of the Project?',
    },
    {
        type:'input',
        name: 'description',
        message: 'Would you mind if you can give a short description of this project?',
    },
    {
        type:'input',
        name: 'installation',
        message: 'How to install your application?'
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do the users have to know while using this repo?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of the license you use for this project',
        choices: ['MIT', 'Academic Free v3.0', 'Apache 2.0', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who will be the contributor in this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How to test your project?',
        default: '',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
