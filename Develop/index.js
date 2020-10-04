const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');
//const readme = generateMarkdown(data);

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please give usage information:'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Please give contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please give test instructions:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['', '', '', '', '', '', '']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('', readme, err => {
        if (err) throw err;

        //console.log('Wrote File');
    })
};

// function to initialize program
function init() {
    const promptUser = () => {

        return inquirer.prompt(questions).then(answers => {
            console.log(answers);
        });
    }
    promptUser();
    //writeToFile();
};

// function call to initialize program
init();