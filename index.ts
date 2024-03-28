#! usr/bin/env node
import inquirer from "inquirer";

console.log("Wellcome to codewithsadia - Cli Number guessing game ");

const randomNumber = Math.floor(Math.random() * 5 +1) ;

const answer = await inquirer.prompt([
    {
        name:"userGuestNumber",
        type:"number",
        message:"Enter your guesst number(Number Limit from 1 to 5 ):",
    },
]);
if(answer.userGuestNumber === randomNumber){
    console.log("Congratulation ! you guess a correct number.");
}
else{
    console.log("Sorry you guess a wrong number.");
}