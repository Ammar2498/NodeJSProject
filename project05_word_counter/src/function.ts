

import inquirer from 'inquirer';
import chalk from 'chalk';


export async function main(){
const countWords = (para: string): number => {
    // Split the paragraph into words by spaces and count the elements
    const words = para.split(/\s+/,);
    return words.length;
};


const countLettersAndremoveSpaces = (para: string): number => {
    // Remove spaces and count the remaining characters
    const letters = para.replace(/\s/g, '');
    return letters.length;
};

async function counter(countW:(text:string) =>number , countL:(text:string)=>number) {
    let totalWords = 0;
    let totalLetters = 0;

    while (true) {
        const res = await inquirer.prompt({
            type: 'input',
            message: 'Enter your Paragraph',
            name: 'Paragraph',
        });

        const paragraph = res.Paragraph;
        const wordsCount = countW(paragraph);
        const lettersCount = countL(paragraph);

        totalWords += wordsCount;
        totalLetters += lettersCount;

        console.log(chalk.bgWhite(`Total Words: ${totalWords}`));
        console.log(chalk.bgWhite(`Total Letters: ${totalLetters}`));


        const continueResponse = await inquirer.prompt({
            type: 'list',
            message: 'Do you want to continue?',
            choices: ['Yes', 'No'],
            name: 'continue',
        });

        if (continueResponse.continue === 'No') {
            break; // Exit the loop if the user chooses 'No'
        }
    }

    
}

counter(countWords, countLettersAndremoveSpaces);
}

