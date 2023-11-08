#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { getAnswer } from "./calc.js";
// import { UserRegisteration } from "./login.js";
// import { userSignIn } from "./login.js";

async function main() {
//   let SignUp = await inquirer.prompt([
//     {
//       message: "Create Your User name",
//       type: "input",
//       name: "userName",
//     },
//     {
//       message: "Create your Password",
//       type: "password",
//       name: "userPassword",
//     },
//   ]);

//   UserRegisteration(SignUp.userName, SignUp.userPassword);
//   console.log("User Has been registered");

//   let signIn = await inquirer.prompt([
//     {
//       message: "Enter your User Name",
//       type: "input",
//       name: "userName",
//     },
//     {
//       message: "Enter Your Password ",
//       type: "password",
//       name: "userPassword",
//     },
//   ]);

// if (userSignIn(signIn.userName,signIn.userPassword)){

//   console.log("Login Sucessfull");
  


  let ans = await inquirer.prompt([
    {
      message: "Enter Your First Number ",

      type: "number",
      name: "Num1",
    },
    {
      message: "Enter you Second Number",
      type: "number",
      name: "Num2",
    },

    {
      message: "Select your Operator ",
      type: "list",
      choices: ["+", "-", "*", "/"],
      name: "operator",
    },
  ]);

  let result = getAnswer(ans.Num1, ans.Num2, ans.operator);
  const formated = chalk.bold.green(`Result ${result}`);
  console.log(formated);
}
// else {
//   console.log("Login Failed please Try Again")
// }
// }
main();
