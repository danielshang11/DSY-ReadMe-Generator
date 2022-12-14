// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
// 1.title of my project and 2.sections entitled Description, 
// 3.Table of Contents, 4.Installation, 5.Usage,6. License,
// 7.Contributing, 8.Tests, and 9.Questions

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
        choices: ['MIT', 'ISC', 'Apache_2.0', 'MPL_2.0', 'None'],
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
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your Email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is you GitHub ID?',
    },
];


// Create a function to write README file
function writeToFile(data) {
    fs.writeFile('DisplayREADME.md', data ,
     (err)=> err ? console.log(err): 
                   console.log('got it!'))
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
            .then((data) => {
                const gotMarkdown = generateMarkdown(data)
		        writeToFile(gotMarkdown)
            })
}

// Function call to initialize app
init();
