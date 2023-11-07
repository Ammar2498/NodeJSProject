import chalk from 'chalk';
let initial_Balance =1000


export function Deposite(depAmount:number):number
{
    if (depAmount>=500)
    {
        initial_Balance+=depAmount
        console.log(chalk.green("your Account has been credit by ",depAmount));
        return depAmount
        
       
    }
    else {
        console.log(chalk.red("Amount must be Greater than or equal to 500"));
        return depAmount
        
    }

}
export function Withdraw(withAmount :number):number{

    if (withAmount <=initial_Balance)
    {
        if (withAmount>500)
        {
            initial_Balance -=withAmount
            console.log(chalk.green("Your Account has been debited by ",withAmount));
           
            
        }
        else{
            console.log(chalk.red("Transaction Failed ! Amount must be greater than 500"));
            
        }
        return initial_Balance
        
    }
    else{
        console.log("Insufficiant Balance");
        
    }
    return initial_Balance

}

export function checkbalance (){
    console.log(chalk.bold("Your Current Balance is",initial_Balance));
    

}

