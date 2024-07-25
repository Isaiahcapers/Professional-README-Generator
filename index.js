// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { log } from 'console';

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the Title of your project?',
    },
    {
        type:'input',
        name:'d-motivation',
        message:'What was your motivation?',
    },
    {
        type:'input',
        name:'d-build',
        message:'Why did you build this project?',
    },
    {
        type:'input',
        name:'d-problem',
        message:'What problem does it solve?',
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project? Please provide a step-by-step description of how to get the development environment running.',
    },
    {
        type:'input',
        name:'usage',
        message:'Provide instructions and examples for use. Include video guides/ screenshots as needed.',
    },
    {
        type:'input',
        name:'contribution',
        message:'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
    },
    {
        type:'input',
        name:'tests',
        message:'How should developers test the functionality of the program?',
    },
    {
        type:'input',
        name:'learn',
        message:'What did you learn?',
    },
    {
        type:'list',
        name:'license',
        message:'What type of license would you like to use?',
        choices: ['MIT License','GNU GPLv3']
    },
    {
        type:'input',
        name:'github',
        message:'What is your GitHub Username?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your GitHub email?',
    },
    // {
    //     type:'',
    //     name:'',
    //     message:'',
    // },
];
const fileName = 'Professional-README.md';

 inquirer.prompt(questions)
.then ((answers) => {
    writeToFile(fileName,answers);
    console.log(answers);
// TODO: Create a function to write README file

function writeToFile(fileName, answers) {
    fs.writeFile(fileName, JSON.stringify(answers), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
}

});
// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();

// .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });