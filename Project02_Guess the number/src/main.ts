#! /usr/bin/env node

import inquirer from "inquirer";
import { guessTheNumber } from "./game.js";
import chalk from "chalk";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";
;

console.log(chalk.blueBright("let's Enjoy the Game"));

async function main() {
  let playAgain = true;

  while (playAgain) {
    let check = false;
    let attempts = 3;
    let i = 0;

    while (i < attempts && !check) {
      let user_Input = await inquirer.prompt([
        {
          message: "Please Input your number: ",
          type: "number",
          name: "Guess",
        },
      ]);

      let minNumber = 1;
      let maxNumber = 10;

      let random_number = guessTheNumber(minNumber, maxNumber);

      console.log("Random number is generated ", random_number);

      if (user_Input.Guess > maxNumber || user_Input.Guess < minNumber) {
        console.log(chalk.redBright("Your number is out of range. Please enter your number between 1 and 10."));
      } else if (user_Input.Guess === random_number) {
        console.log(chalk.green("Congratulations! you guessed it right"));
        check = true;
      } else {
        console.log(chalk.red("You lost an attempt. Please try again."));
        i++;
      }
    }

    if (!check) {
      console.log(chalk.red("You've exhausted all your attempts. Game over."));
    }

    const playAgainResponse = await inquirer.prompt([
      {
        message: "Do you want to play again? (Y/N): ",
        type: "input",
        name: "playAgain",
      },
    ]);

    playAgain = playAgainResponse.playAgain.toLowerCase() === 'y';
  }
}


main();
