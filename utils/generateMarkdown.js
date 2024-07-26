import fs from 'fs';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ( license === "MIT License")
  {
    return '![Static Badge](https://img.shields.io/badge/License-MIT-gold)'

    } else if ( license === "GNU GPLv3") {
    return '![Static Badge](https://img.shields.io/badge/License-GPL_v3-white)'

  } return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Mit License") {
      return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === 'GNU GPLv3') {
      return `[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  return '';
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License") {
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
  } else if (license === 'GNU GPLv3') {
    return `This project is licensed under the ${renderLicenseLink(license)}.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
     by ${answers.name}  
     ${renderLicenseBadge(answers.license)}

    ## Description  
    -${answers["d-motivation"]}
    -${answers['d-build']}  
    -${answers["d-problem"]}
    -${answers.learn}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)

    ## Installation  
    ${answers.installation}

    ## Usage  
    ${answers.usage}
    ## Contact-Me
    - Name -${answers.name}
    - Email -${answers.email}
    - GitHub -${answers.github}

    ${renderLicenseSection(answers.license)}
    ${renderLicenseLink(answers.license)}
    ## How to Contribute
    ${answers.contribution}
    ##Tests
    ${answers.tests}
`;
}

export default generateMarkdown;
