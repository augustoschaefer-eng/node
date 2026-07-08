export function validarNome(nome) {
    return nome.length >= 3;
}

export function validarIdade(idade) {
    return idade >= 0;
}

const usuarios = [];

export function criarUsuario(nome, idade) {
  const usuario = { nome, idade };
  usuarios.push(usuario);
  return usuario;
}

export function listarUsuarios() {
  return usuarios;
}

export function excluirUsuario(nomeEx) {
  const index = usuarios.findIndex(usuario => usuario.nome === nomeEx);

  if (index !== -1) {
      usuarios.splice(index, 1);
      return true;
  }

  return false;
}

