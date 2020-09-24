// External NPM
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");

// Internal modules
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
// array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your github user name?",
  },
  {
    type: "input",
    name: "tittle",
    message: "What is your Project Tittle?",
  },
  {
    type: "input",
    name: "badge",
    message: "Please provide the badges links that you want",
  },
  {
    type: "input",
    name: "description",
    message: "description about your project",
  },

  {
    type: "input",
    name: "installation",
    message: "Please provide the installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide the project usage",
  },
  {
    type: "input",
    name: "contributors",
    message:
      "If applicable, provide guidelines on how other developers can contribute to your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose your license:",
    choices: [
      "GNU AGPLv3",
      new inquirer.Separator(),
      "GNU GPLv3",
      new inquirer.Separator(),
      "GNU LGPLv3",
      new inquirer.Separator(),
      "Mozilla Public License 2.0",
      new inquirer.Separator(),
      "Apache License 2.0",
      new inquirer.Separator(),
      "MIT License",
      new inquirer.Separator(),
      "Boost Software License 1.0",
      new inquirer.Separator(),
      "The Unlicense",
      new inquirer.Separator(),
    ],
  },
  {
    type: "input",
    name: "test",
    message: "Please provide the project tests",
  },

  {
    type: "input",
    name: "repo",
    message: "What is your repo link?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been generated");
  });
}

// const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
  try {
    // Prompt Inquirer questions
    const userResponses = await inquirer.prompt(questions);
    console.log("Your responses: ", userResponses);
    console.log(
      "Thank you for your responses! Fetching your GitHub data next..."
    );

    // Call GitHub api for user info
    const userInfo = await api.getUser(userResponses);
    console.log("Your GitHub user info: ", userInfo);

    // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
    console.log("Generating your README next...");
    const markdown = generateMarkdown(userResponses, userInfo);
    console.log(markdown);

    // Write markdown to file
    await writeFileAsync("ExampleREADME.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

// function call to initialize program
init();
