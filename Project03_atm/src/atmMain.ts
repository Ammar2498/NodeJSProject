#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import { Deposite } from './atmFunctions.js';
import { Withdraw} from './atmFunctions.js';
import { checkbalance } from './atmFunctions.js';

let userPin = 121

async function validatePin()

{
  while (true){
  let askUserPin =await inquirer.prompt([
    {
      message :"Enter Your PIN",
      type : "number",
      name :"userpin",
      default:'121'
    }
  ])

  if (askUserPin.userpin===userPin){
    console.log(chalk.greenBright("SucessFully Login"));
    return
    
  }
  else {
    console.log(chalk.red("Invalid PIn"));
    
  }
}}

async function exitYesOrNo(){
  let exiting = await inquirer.prompt([
    {
      message : "Do you want to exit ?",
      type:"confirm",
      name :'confirmExit',
      default :false
    }
  ])

  return exiting.confirmExit
}



async function mainMenu(){
 await validatePin();
 while(true){


  let userOperations = await inquirer.prompt([
    {
      message :"Which Operation you like to perform",
      type:"list",
      choices :['withdraw','deposite','check Balance','Exit'],
      name :"operations"

    },
  ])
  switch (userOperations.operations)
  {
    case 'withdraw':
      let userWithdraw = await inquirer.prompt([
        {
          message : "Enter Your Amount",
          type : "number",
          name :"withdrawlamount",
        }

      ]);
      Withdraw(userWithdraw.withdrawlamount)
      break;

      case 'deposite':
      let userDeposite= await inquirer.prompt([
        {
          message :"Enter your Amount",
          type: "number",
          name: "depositamount",
        }

      ])
      Deposite(userDeposite.depositamount)
      break;

      case 'check Balance':
        checkbalance ()
        break

        case  'Exit':
          let exitAtm= await exitYesOrNo()
          if (exitAtm){
            console.log("Thank you for using ATM");
            return
            
          }
          break ;
          default:
            console.log(chalk.red("Invalid Choice"));
            break;
            
          


  

  }


}}
mainMenu()