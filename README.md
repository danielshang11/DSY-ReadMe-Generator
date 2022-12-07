# DSY-ReadMe-Generator

## Description

The Main purpose to build this generator is to make user esier to make the README file which is based on the normal structor. Users will get an perfect README file without taking care of the type-setting and markdown.
This application is built using node.js framework knowledge and will generate the READE ME file by asking user each sections through prompts.
Check the question and what the user will get on reademe file display as below:
When User enter 
1. Project Title : title of readme title will be displayed.
2. Description, installation instructions, usage information, contribution guidelines, and test instructions: will be add into sections of the Readme entitledDescription, Installation, Usage, Contributing, and Tests.
3. choose the license: will be add on the license.
4. GitHub username: Questions title with the link to user's github prrofile.
5. email: added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
6. click on links (Table of the content): will be taken to the corresponging section of the README.

## Technologies Used

- [x] Node.js
- [x] Inquirer NPM Library
- [x] fs standard Node Library

## Usage

Clone the repo to local:
```
clone the repo to local machine
```

Open in Integrated Terminal and run
```
node index.js
```
By answering the prompt questions user will get the README file with the name DisplayREADME.md

## Usage

![alt text](./Develop/assets/Guide.gif)

```
What user want to show others on README file will be displayed by answering the prompt question.
```

```
The README file (file name will be DisplayREADME.md) that we generate through this application will be outputted in the directory of the project with all the selected user's answer.
```
## Credits

[Readme Format](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

[inquirer version 8.24](https://www.npmjs.com/package/inquirer/v/8.2.4)

## License

N/A