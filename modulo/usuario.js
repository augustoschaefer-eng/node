function validarNome(nome) {
    return nome.length >= 3;
}

function validarIdade(idade) {
    return idade >= 0;
}

const usuarios = [];

function criarUsuario(nome, idade) {
  const usuario = { nome, idade };
  usuarios.push(usuario);
  return usuario;
}



function listarUsuarios() {
  return usuarios;
}

module.exports = {
    validarNome,
    validarIdade,
    criarUsuario,
    listarUsuarios
};