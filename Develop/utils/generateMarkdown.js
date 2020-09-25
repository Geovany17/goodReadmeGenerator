// function to generate markdown for README
function generateMarkdown(userResponses) {
  // Generate Table of Contents conditionally based on userResponses
  return `# ${userResponses.title}\n

  ${userResponses.badge}\n
  [![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/releases/)
  ([![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
  
  
  Check out the badges hosted by [shields.io](https://shields.io/).
## Description 
${userResponses.description}\n
## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributing](#Contributing)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 
## Installation
        ${userResponses.installation}\n
## Usage
${userResponses.usage}\n
## Licence
${userResponses.licence}\n
## Contributors
${userResponses.contributing}\n
## Test
${userResponses.test}\n
## Repository
- [Project Repo](${userResponses.repo})\n
## GitHub
- [GitHub Profile](${userResponses.profile})\n
`;
}

module.exports = generateMarkdown;
