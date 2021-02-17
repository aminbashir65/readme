// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        name:"title",
        type: "input",
        message: "what is the title",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markDown = generateMarkdown(data)
    console.log(markDown)
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
