// Todo.ts
import inquirer from "inquirer";
const todos: Todo[] = [];
let todoIdCounter = 1;
export class Todo {
    constructor(
      public id: number,
      public title: string,
      public completed: boolean
    ) 
  {}
  }
  export async function addTodo() {
    const { title } = await inquirer.prompt({
      message: 'Enter the title of the new Todo:',
      type: 'input',
      name: 'title',
    });
  
    const newTodo = new Todo(todoIdCounter++, title, false);
    todos.push(newTodo);
    console.log('New Todo added:', newTodo.title);
  }
  
  export async function removeTodo() {
    if (todos.length === 0) {
      console.log('No Todos to remove.');
      return;
    }
  
    const { todoIndex } = await inquirer.prompt({
      message: 'Select a Todo to remove:',
      type: 'list',
      name: 'todoIndex',
      choices: todos.map((todo, index) => ({ name: `${index + 1}: ${todo.title}`, value: index })),
    });
   
  
    const removedTodo = todos.splice(todoIndex, 1)[0];
    console.log('Removed Todo:', removedTodo.title);
  }


export async function changeStatus() {
  const { action } = await inquirer.prompt({
    message: 'Choose an action:',
    type: 'list',
    name: 'action',
    choices: ['Complete Task', 'Back'],
  });

  if (action === 'Back') {
    return;
  }

  if (action === 'Complete Task') {
    const { todoIndex } = await inquirer.prompt({
      message: 'Select a Todo to change status:',
      type: 'list',
      name: 'todoIndex',
      choices: todos.map((todo, index) => ({ name: `${index + 1}: ${todo.title}`, value: index })),
    });

    const selectedTodo = todos[todoIndex];
    selectedTodo.completed = !selectedTodo.completed; // Toggle the status

    const status = selectedTodo.completed ? 'completed' : 'pending';
    console.log(`Task "${selectedTodo.title}" marked as ${status}.`);
  }
}

  export function seeAllTodos() {
    if (todos.length === 0) {
      console.log('No Todos available.');
    } else {
      console.log('All Todos:');
      todos.forEach((todo, index) => {
        console.log(`${index + 1}: ${todo.title} [${todo.completed ? 'Completed' : 'Pending'}]`);
      });
    }
  }



  