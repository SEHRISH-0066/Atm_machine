#! /usr/bin/env node
import inquirer from "inquirer";
import chalk  from "chalk";

let my_balance = 50000
let my_pin = 12345
// print welcom message
    console.log(chalk.green("\n \t Welcom to atm machine\n"));
let pin_check = await inquirer.prompt([
    { 
        name:"pin",
        type: "number",
        message: chalk.blue("Enter your pin")
    },
]);
if(pin_check.pin === my_pin){
 let operation = await inquirer.prompt([
    {
         name: "list",
         type: "list",
         message:(chalk.red( "Select any option")),
         choices: ["withdraw", "chack balance"]
    },
 ]);
 if(operation.list === "withdraw"){
  let amount = await inquirer.prompt([
    {
        name: "amount",
        type: "number",
        message:chalk.yellow ("Enter your amount")
    },
  ]);
  if(amount.amount <= my_balance && amount.amount >= 500){
 my_balance -= amount.amount
 console.log(chalk.bgBlue("your remaining balance is:" + my_balance));
  }
  else{
    console.log(chalk.red("invalid amount"));
  }
  }
  else if(operation.list === "chack balance"){
    console.log(chalk.bgBlue("your balance is:" + my_balance));
  }
 }
 else{
    console.log(chalk.red("invalid pin"));
 }