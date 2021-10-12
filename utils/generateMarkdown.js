// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
//function renderLicenseBadge(license)
//I'll finish this later, I tried T_T


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license)
//I'll reupload and finish this later


// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licenses) {
  return `# ${data.title}
# Tables of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)
# Installation
${data.installation}
# Usage
${data.usages}
# License
${data.licenses}
# Contributions
${data.contribute}
# Tests
${data.tests}
# Questions
If you have any questions, please e-mail me at ${data.email}.
# Credits
Github: [${data.username}]
Copyright ${data.name}. All Rights Reserved.

`;
}

module.exports = generateMarkdown;
