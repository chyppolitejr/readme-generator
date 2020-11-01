const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
  "What is the name of the project? ",
  "What is the description of the project? ",
  "What are the installation instructions for the project?",
  "How do you use the application?",
  "Please provide a list of contributors, if any, along withy any third-party assets that require attribution, list the creators with links to their primary web presence. If you followed tutorials include those links here as well.",
  "What license type does this project use?",
];

// function to write README file
function writeToFile(fileName, data) {
  let fileName = "README.md";

  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("README file has been generated successfully")
  );
}

// function to initialize program
function init() {}

// function call to initialize program
init();
