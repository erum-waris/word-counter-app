#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlue.greenBright.italic("******************WELCOME TO ERUM'S WORD COUNTER APP******************"))
const answers : {
    sentence :string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a sentence to count words :"
    }
]
);
// using methods(functions) split  to remove whitespaces and trim to separate words
let words = answers.sentence.trim().split(" ");

//  printing array 
console.log(chalk.yellow("Here are your words :" ,words));

//  counting words by using length property of variable words
console.log(chalk.bgGrey.red.bold("your sentence word count is : ",words.length));

console.log(chalk.grey("************************************************"));
console.log(chalk.red("^^^^^^^^^^THANKS FOR USING APPLICATION^^^^^^^^^^"));
console.log(chalk.green("************************************************"));




