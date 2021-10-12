// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const licenses = [
    "Mozilla",
    "Microsoft",
    "None",
];

const questions = [
    {
        type: "input",
        message: "Enter your Github username: ",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your email: ",
        name: "email"
    },
    {
        type: "input",
        message: "Enter your project title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a short project description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the installation instructions: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the usage of the project: ",
        name: "usage"

    },
    {
        type: "input",
        message: "Enter contribution guidelines: ",
        name: "contribute"

    }, 
    {
        type: "input",
        message: "Enter test instructions: ",
        name: "tests"
    },
    {
        type: "list",
        message: "Enter licenses used for the project: ",
        name: "licenses",
        choices: licenses,
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err){
            throw err;
        }
    })
};


// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const response = generateMarkdown(answers, licenses)
    writeToFile("README.md", response);
    })
};

// Function call to initialize app
init();
