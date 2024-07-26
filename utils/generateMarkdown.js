import fs from 'fs';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
     by ${data.name}  
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
    ## License
    ${renderLicenseSection}
    ## How to Contribute
    ${answers.contribution}
    ##Tests
    ${answers.tests}
`;
}

export default generateMarkdown;
