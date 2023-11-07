import { faker, tr } from "@faker-js/faker"

import inquirer from "inquirer"
import chalk from 'chalk';



class Customer {
    firstName:string
    lastName: string
    age : number
    gender : string
    mobNumber: number
    accNumber : number
    constructor(fName: string, lName:string, age : number,gender:string,
        mob:number,acc:number){
            this.firstName=fName,
            this.lastName=lName,
            this.age=age;
            this.gender=gender;
            this.mobNumber=mob;
            this.accNumber=acc

    }
}



//Interface of bankaccount
interface BankAccount{
    accNumber: number,
    balance: number,

}

class Bank{
    customer :Customer[]=[]
    account: BankAccount[]=[]

    addCustomer (obj:Customer){
        this.customer.push(obj)
    }

    addAccountNumber(obj:BankAccount){
        this.account.push(obj)
    }

    trasaction (accountObj:BankAccount){
        let newAccount =this.account.filter((acc)=>acc.accNumber!==accountObj.accNumber )
        this.account= [...newAccount,accountObj]


    }

}

let myBank = new Bank();

for (let i :number =1 ; i <5;i ++){
    let fName = faker.person.firstName("male")
    let lName = faker.person.lastName()
    let num = parseInt(faker.phone.number("3#######"));
    const cus = new Customer(fName, lName,25*i,"male",num,1000+i);
   

    myBank.addCustomer(cus)
    myBank.addAccountNumber({accNumber:cus.accNumber,balance:1000*i})
    


}

async function bankServices(bank:Bank){
    
    do {    let serv = await inquirer.prompt({
        type: "list",
        name:"select",
        message :"Please select the service",
        choices :["View Balance","Cash Withdraw","Cash Deposit"]
    })
    if (serv.select=="View Balance"){
        let res = await inquirer.prompt({
            type: "input",
            name :"accNumber",
            message : "Please Enter your Account Number"
        })

        let account =myBank.account.find((acc)=>acc.accNumber==res.accNumber)
        if(!account){
            console.log(chalk.bold.red("Invalid Account Number"));
            
        }
        if(account){
            let name = myBank.customer.find((item)=>item.accNumber==account?.accNumber);
            console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)} Your Account balance is $ ${chalk.bold.blue(account.balance)}`);
            
         
        }
    }
 
if (serv.select=="Cash Withdraw")
{
    let res = await inquirer.prompt({
        type: "input",
        name :"accNumber",
        message : "Please Enter your Account Number"
    })
    let account =myBank.account.find((acc)=>acc.accNumber==res.accNumber)
    if(!account){
        console.log(chalk.bold.red("Invalid Account Number"));
        
    }
    if (account){
        let ans = await inquirer.prompt({
            type : "number",
            message : "Please enter your amount",
            name :"rupee"
        })
        if(ans.rupee>account.balance){
            console.log("Insuficient Balance");
            
        }

        let newBalance  = account.balance- ans.rupee

        //transaction method
        bank.trasaction({accNumber:account.accNumber,balance:newBalance})
        
        

    }


    
}
if (serv.select=="Cash Deposit")


    {
        let res = await inquirer.prompt({
            type: "input",
            name :"accNumber",
            message : "Please Enter your Account Number"
        })
        let account =myBank.account.find((acc)=>acc.accNumber==res.accNumber)
        if(!account){
            console.log(chalk.bold.red("Invalid Account Number"));
            
        }
        if (account){
            let ans = await inquirer.prompt({
                type : "number",
                message : "Please enter your amount",
                name :"rupee"
            })
    
            let newBalance  = account.balance+ ans.rupee
    
            //transaction method
            bank.trasaction({accNumber:account.accNumber,balance:newBalance})
    console.log(newBalance);
    
        }
    
}
        
    } while (true);
}
bankServices(myBank)