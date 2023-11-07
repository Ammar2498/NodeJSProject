import inquirer from "inquirer";
import chalk from "chalk";
import CheckboxPrompt from "inquirer/lib/prompts/checkbox.js";

class Player {
  name: string;
  fuel: number = 100;

  constructor(name: string) {
    this.name = name;

  }

  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }

  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent extends Player {
  constructor(name: string) {
    super(name);
    this.name = name;
 
  }

  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}
let Player1 = await inquirer.prompt({
  type: "input",
  name: "name",
  message: "Please enter your player",
});

let Opponent1 = await inquirer.prompt({
  type: "list",
  name: "select",
  message: "Select Your Opponent",
  choices: ["Skeleton", "Assassin", "Zombie"],
});

//Gathering data
let p1 = new Player(Player1.name);
let o1 = new Opponent(Opponent1.select);
do {
  if (Opponent1.select == "Skeleton") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select your Opponent",
      choices: ["Attack", "Drink Portion", "Run For your Life"],
    });

    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));

        if (p1.fuel <= 0) {
          console.log(chalk.bold.red.italic("You loose , Play again"));
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));

        if (o1.fuel <= 0) {
          console.log(chalk.bold.green.italic("You Won"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic(`Your Drink health Portion your fuel is ${p1.fuel}`)
      );
    }
    if (ask.opt == "Run For your Life") {
      console.log(chalk.bold.italic("You loose , Play again"));
      process.exit();
    }
  }

  //Assassin
  if (Opponent1.select == "Assassin") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select your Opponent",
      choices: ["Attack", "Drink Portion", "Run For your Life"],
    });

    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));

        if (p1.fuel <= 0) {
          console.log(chalk.bold.red.italic("You loose , Play again"));
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));

        if (o1.fuel <= 0) {
          console.log(chalk.bold.green.italic("You Won"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelDecrease();
      console.log(
        chalk.bold.italic(`Your Drink health Portion your fuel is ${p1.fuel}`)
      );
    }
    if (ask.opt == "Run For your Life") {
      console.log(chalk.bold.italic("You loose , Play again"));
      process.exit();
    }
  }

  // Zombie
  if (Opponent1.select == "Zombie") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select your Opponent",
      choices: ["Attack", "Drink Portion", "Run For your Life"],
    });

    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));

        if (p1.fuel <= 0) {
          console.log(chalk.bold.red.italic("You loose , Play again"));
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));

        if (o1.fuel <= 0) {
          console.log(chalk.bold.green.italic("You Won"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelDecrease();
      console.log(
        chalk.bold.green(`Your Drink health Portion your fuel is ${p1.fuel}`)
      );
    }
    if (ask.opt == "Run For your Life") {
      console.log(chalk.bold.red("You loose , Play again"));
      process.exit();
    }
  }
} while (true);
