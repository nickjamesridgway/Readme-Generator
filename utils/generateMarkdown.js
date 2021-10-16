// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = "## License";
  let licenseBadge = "";
  let contribution =
      "[Contributor Covenant](https://www.contributor-covenant.org/)";
      // switch statement to catch what type of license
  switch (data.licenses) {
      case "None":
          license = "";
          break;
      case "Apache":
          licenseBadge =
              "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
          break;
      case "Mozilla":
          licenseBadge =
              "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
          break;
  }
    if (data.contribution != "") {
  contribution = data.contribution;
}

return `
# ${data.title}
  ${license}
  ${licenseBadge}
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
