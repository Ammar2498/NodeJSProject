import chalk from "chalk";
import inquirer from "inquirer";

// let user_Name= await inquirer.prompt({
//     type :"input",
//     name :"userName",
//     message :"Enter Your Name"
// })

// console.log(chalk.blue(user_Name.userName));

const api_link:string ="https://opentdb.com/api.php?amount=6&category=18&difficulty=easy&type=multiple"


let fetch_data = async (data:string)=>{
    let fetchQuiz :any = await fetch(data)
    let res  =await fetchQuiz.json()
    return res.results



}

let data=await  fetch_data (api_link)

let startQuiz =async ()=>{

    let score :number= 0

    //User Name
    let Name = await inquirer.prompt({
        type : "input",
        name: "fname",
        message : "What is your Name ?"
    })

    for (let i= 1 ; i <=5 ; i ++){
        let answer = [...data[i].incorrect_answers, data[i].correct_answer]

        let ans = await inquirer.prompt({
            type : "list",
            name: "quiz",
            message :data[i].question,
            choices: answer.map((val:any)=>val),
        });
        if (ans.quiz==data[i].correct_answer){
            ++score; 
            console.log(chalk.bold.italic.blue("Correct"));
            

        }
        else {
            console.log(`Correct Answer is ${chalk.bold.italic.red(data[i].correct_answer)}`);
            
        }
    }

    console.log(`Dear ${chalk.green.bold(Name.fname)},Your Score is ${chalk.red.bold (score)} out of ${chalk.red.bold(`5`)}`)
    
}

startQuiz()
