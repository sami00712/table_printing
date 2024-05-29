#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgWhiteBright.red.bold("\n\t <=======> Welcome to Table Generate App. <=======> \n"));

let myTable: boolean = true;

while(myTable){

    let input: {answer : number} = await inquirer.prompt([
        {
            name:"answer",
            type:"number",
            message:chalk.greenBright.bold("Enter your Number that you want to print it's Table:")
        }
    ]);

    let myNumber: number = input.answer;

    if(myNumber){
        console.log(chalk.redBright.bold(`Here is the Table of ${myNumber}\n`));

        for(let i = 1; i <= 10 ; i++){
            console.log(chalk.greenBright.bold(`=> ${myNumber} x ${i} = ${myNumber * i} `));
        
            
        }
        console.log("\n")
    } else {
        console.log(chalk.redBright.bold("Enter a input in numerical form"));
    }

    // Asking user if he wants to print table again

    let print = await inquirer.prompt([
        {
            name:"ask",
            type:"confirm",
            message:chalk.greenBright.bold("Do you want to print another Table"),
            default:"false"
        }
    ]);

    if(print.ask === false){
        myTable = false;
        console.log(chalk.bgWhiteBright.red.bold(" \n \t Thankyou for using the App. \t \n"));
    }
    
}   