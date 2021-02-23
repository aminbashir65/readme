// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name:"title",
        message: "what is the title of the Project",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any special usage instructions.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['Apache 2.0', 'GNU', 'MIT', 'Creative Commons', 'None']
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markDown = generateMarkdown(data)
    // console.log(markDown)
    fs.writeFile(`output/${fileName}`, markDown, function(err){
        if (err) console.log(err)
    } )
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(function(answers){
    console.log(answers)

 writeToFile("README.md", answers)   
}).catch(function(err){
    if (err) console.log(err)
})
}

// Function call to initialize app
init();
