// function to generate markdown for README
function generateMarkdown(userResponses) {
  // Generate Table of Contents conditionally based on userResponses
  return `# ${userResponses.title}\n

  ${userResponses.badge}\n
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
- ${userResponses.name}\n
- [GitHub Profile](${userResponses.profile})\n
- <${userResponses.email}>\n

`;
}

module.exports = generateMarkdown;
