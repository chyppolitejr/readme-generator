const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
  "What is the name of the project? ",
  "What is the description of the project? ",
  "What are the installation instructions for the project?",
  "How do you use the application?",
  "Please provide a list of contributors, if any, along withy any third-party assets that require attribution, list the creators with links to their primary web presence. If you followed tutorials include those links here as well.",
  "What is the URL to the deployed Application?",
  "What license type does this project use?",
  "What technologies were used?",
];

const licenseType = [
  "none",
  "Apache 2.0",
  "GNU General Public v3.0",
  "MIT",
  "BSD 2-Clause 'Simplified'",
  "BAS 3-Clause 'Simplified'",
  "Boost Software 1.0",
  "Creative Commons Zero v1.0 Universal",
  "Eclipse Public 2.0",
  "GNU Affero General Public v3.0",
  "GNU General Public v2.0",
  "GNU Lesser General Public v2.1",
  "Mozilla Public 2.0",
  "The Unilicense",
];

// function to write README file
function writeToFile(fileName, data) {
  //let outputFileName = "README.md";

  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("README file has been generated successfully")
  );
}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "projName",
        message: questions[0],
      },
      {
        type: "input",
        name: "projDesc",
        message: questions[1],
      },
      {
        type: "input",
        name: "projInstInstr",
        message: questions[2],
      },
      {
        type: "input",
        name: "projUse",
        message: questions[3],
      },
      {
        type: "input",
        name: "projContrib",
        message: questions[4],
      },
      {
        type: "input",
        name: "projURL",
        message: "What is the URL for app (if deployed)?",
      },
      {
        type: "list",
        name: "projLicense",
        message: questions[5],
        choices: licenseType,
      },
      {
        type: "input",
        name: "projTech",
        message: "What technologies were used to created the project?",
      },
    ])
    .then((response) => formatMarkUp(response));
}

// function call to initialize program
init();

// function format markup
function formatMarkUp(objResponses) {
  let nameOfFile = "./generated-readme/README.md";
  let markUp = `
  # ${objResponses.projName} \n\n
  ## Description \n
  ${objResponses.projDesc} \n\n
  ## Technologies Used \n
  ${objResponses.projTech} \n\n
  ## Application Screenshots
  <!-- ![Alt Text](url)  Uncomment this line to add application image --> \n\n
  ## Installation \n
  ${objResponses.projInstInstr}
  ## Usage \n
  ${objResponses.projUse} \n\n
  ## Credits \n
  ${objResponses.projContrib} \n\n
  ## Deployed Application \n
  ${objResponses.projURL} \n\n
  ## License \n
  Licensed under the [${objResponses.projLicense}](LICENSE) license.
  `;
  // create the file
  writeToFile(nameOfFile, markUp);
}
