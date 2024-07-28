import fs from 'fs';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ( license === 'MIT License')
  {
    return '![Static Badge](https://img.shields.io/badge/License-MIT-gold)'
    } else if ( license === 'GNU GPLv3') {
    return '![Static Badge](https://img.shields.io/badge/License-GPL_v3-white)'
  } return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
      return `[MIT License](https://choosealicense.com/licenses/mit/)`;
  } else if (license === 'GNU GPLv3') {
      return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`;
  }
  return '';
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'MIT License') {
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
  } else if (license === 'GNU GPLv3') {
    return `This project is licensed under the ${renderLicenseLink(license)}.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  By: ${answers.name}

  ${renderLicenseBadge(answers.license)}

  ## Description
  ### What was your motivation? 
  - ${answers["d-motivation"]}
  ### Why did you build this project?
  - ${answers["d-build"]}
  ### What problem does it solve?   
  - ${answers["d-problem"]}
  ### What did you learn?
  - ${answers.learn}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

  ## Installation  
  ${answers.installation}

  ## Usage  
  ${answers.usage}

  ## Contact-Me
  - Name: ${answers.name}
  - Email: ${answers.email}
  - GitHub: ${answers.github}

  ## License
  ${renderLicenseSection(answers.license)}

  ## How to Contribute
  ${answers.contribution}
  ## Tests
  ${answers.tests}
`;
}

export default generateMarkdown;
