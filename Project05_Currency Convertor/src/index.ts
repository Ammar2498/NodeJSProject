#! /usr/bin/env node
import chalk from "chalk";
//import inquirer from "inquirer";
import inquirer from 'inquirer';
import { cnvData } from "./functions.js";

//fetch data
let apiLink = " https://v6.exchangerate-api.com/v6/fadece7d678d07a33f977a7e/latest/PKR"
export let fetchData = async (data:any)=>{
  
    let fetchData = await fetch(data)
    let res = await fetchData.json()
    return res.conversion_rates
};

let result= await fetchData(apiLink)

let countries= Object.keys(result)// converting object into Array

let converTO = await inquirer.prompt({

    type :"rawlist",
    name: "name",
    message: "converting from",
    choices : countries,
}) 

let userMoney = await inquirer.prompt ({
    type :"number",
    name: "Rupee",
    message :`Please enter the amount in ${chalk.green.bold (converTO.name)}`
})

let convertFrom = await inquirer.prompt({
    type : "list",
    name :"name",
    message :"converting To",
    choices: countries,

})

//Conversion Rate
let cnv =  `https://v6.exchangerate-api.com/v6/fadece7d678d07a33f977a7e/pair/${converTO.name}/${convertFrom.name}`

//fetching date for conversion rate



let cnvRate = await cnvData(cnv)
let convertedRate = userMoney.Rupee * cnvRate
console.log(`Your ${chalk.bold.greenBright(converTO.name)} in
${chalk.bold.greenBright(userMoney.Rupee)}
${chalk.bold.greenBright(convertFrom.name)} is 
${chalk.bold.greenBright(convertedRate)}`);










