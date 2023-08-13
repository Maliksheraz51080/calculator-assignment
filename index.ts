import inquirer from "inquirer";
import chalk from "chalk";


 let answer = await inquirer.prompt([{
    name : "num1",
    type : "number",
    message : "Enter your first number",
    
 },
 
 
{
    name : "num2",
    type : "number",
    message : "Enter your Second number",
},
{
    name : "operators",
    type : "list",
    message : "choose one which you will profome on numbers",
    choices : ["addition" , "substraction" , "Multipication" , "division"]
},
])

let result : number;
if (answer.operators == "addition"){
    result = answer.num1 + answer.num2
    console.log(chalk.bgWhite.black("your result is  =") + "   " + chalk.bgGreenBright.red(result) );
}else if (answer.operators == "substraction"){
    result = answer.num1 - answer.num2
    console.log(chalk.bgWhite.black("your result is  =  ") + "   "+ chalk.bgGreenBright.red(result) );
}else if (answer.operators == "Multipication"){
    result = answer.num1 * answer.num2
    console.log(chalk.bgWhite.black("your result is  =  ") + "   "+ chalk.bgGreenBright.red(result) );
}else if (answer.operators == "division"){
    result = answer.num1 / answer.num2
    console.log(chalk.bgWhite.black("your result is  =  ")+ "   " + chalk.bgGreenBright.red(result) );
}

