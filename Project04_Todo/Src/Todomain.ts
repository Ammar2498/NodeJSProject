#! /usr/bin/env node

import inquirer from 'inquirer';
import { addTodo } from './TodoFunction.js';
import { removeTodo } from './TodoFunction.js';
import { changeStatus } from './TodoFunction.js';
import { seeAllTodos } from './TodoFunction.js';


async function main() {
  while (true) {
    const { action } = await inquirer.prompt({
      message: 'Choose an action:',
      type: 'list',
      name: 'action',
      choices: ['Add Todo', 'Remove Todo', 'Change Status', 'See All Todos', 'Exit'],
    });

    if (action === 'Exit') {
      console.log('Goodbye!');
      break;
    }

    switch (action) {
      case 'Add Todo':
        await addTodo();
        break;
      case 'Remove Todo':
        await removeTodo();
        break;
      case 'Change Status':
        await changeStatus();
        break;
      case 'See All Todos':
        seeAllTodos();
        break;
        case 'Exit':
        break;
    }
  }
}


main();
