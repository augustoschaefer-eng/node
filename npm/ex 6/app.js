import chalk from 'chalk';
import promptSync from "prompt-sync";

const prompt = promptSync();

const nome = prompt("digite o seu nome de guerreiro: ");
const classe = prompt("digite a sua classe: ");
const nivel = Number(prompt("digite o seu nivel: "));

let hp = nivel *10;

let rank;

if(nivel>=1 && nivel <= 10){
    rank = "noob";
}else if (nivel>=11 && nivel<=20){
    rank = pro;
}else{
    rank = "hacker";
}

console.log("========================");
console.log("====Ficha do Usuario====");
console.log("========================");
console.log(chalk.blue("Nome:", nome));
console.log(chalk.magenta("Classe:", classe));
console.log(chalk.green("Nivel:", nivel));
console.log(chalk.red("Rank:", rank));
console.log(chalk.cyan("Hp:", hp));
console.log("========================");