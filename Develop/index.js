//========================
// External NPM
//=======================
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
// Internal modules
const generateMarkdown = require("./utils/generateMarkdown.js");
//=================================
// array of questions for user
//===================================
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
    name: "contributing",
    message:
      "If applicable, provide guidelines on how other developers can contribute to your project.",
  },
  {
    //==================================
    //User can choose from a list of license
    //==================================
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

//=============================================
// function to initialize program
//=============================================
async function init() {
  inquirer.prompt(questions).then(function (data) {
    const queryUrl = `https://api.github.com/users/${data.username}`;

    axios.get(queryUrl).then(function (res) {
      const githubInfo = {
        githubImage: res.data.avatar_url,
        email: res.data.email,
        profile: res.data.html_url,
        name: res.data.name,
      };

      fs.writeFile(
        "newREADME.md",
        generateMarkdown(data, githubInfo),
        function (err) {
          if (err) {
            throw err;
          }

          console.log("New README file created with success!");
        }
      );
    });
  });
}
//===========================================
// function call to initialize program
//===========================================
init();
