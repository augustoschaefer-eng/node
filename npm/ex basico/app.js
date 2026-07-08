import chalk from 'chalk';
import sillyname from 'sillyname';

console.log(chalk.green("mensagem verde"));
console.log(chalk.red("erro"));

const nome = sillyname();

console.log("nome gerado", nome);
console.log(chalk.bgYellowBright(sillyname()));