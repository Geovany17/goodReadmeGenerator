const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your user name?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your Project Tittle?",
    name: "Tittle",
  },
  {
    type: "input",
    message: "description about your project",
    name: "Description",
  },

  {
    type: "input",
    message: "Please provide the installation instructions",
    name: "Installation",
  },
  {
    type: "list",
    message: "Choose your license:",
    name: "License",
    choices: ["MIT", new inquirer.Separator(), "B"],
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    console.log(`#response.username` + " " + response.username);
  });
}

// function call to initialize program
init();
