const prompt = require("prompt-sync")();
const usu = require("./modulo/usuario");
const fs = require("fs");
const log = require("./modulo/logs");
const arq = require("./modulo/arquivos"); 


let opcao =0;
while(opcao !=3){
      opcao = Number(prompt("Digite qual ação vc quere realizar: 1-adicionar usuario 2-listar usuario 3-fechar o sistema:   "));
      
      if(opcao  ==1){

        const nome = prompt("Digite o nome: ");
        const idade = Number(prompt("Digite a idade: "));

        usu.validarNome(nome)
        usu.validarIdade(idade);

            if (usu.validarNome(nome) && usu.validarIdade(idade)) {
                const usuario = usu.criarUsuario(nome, idade);

                usu.criarUsuario(nome,idade);

                console.log(`\nNome: ${nome}`);
                console.log(`\nIdade: ${idade}`);

                log.registrarLog(`Usuário ${nome} criado.`);
                arq.salvarUser(usuario);
        } else{
            console.log("dados invalidos");
        }
      }

      else if(opcao==2){
        console.log(usu.listarUsuarios());
      }

}