var database = require("../database/config")

function inserirImg(idUsuario, imagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario,imagem);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        UPDATE  Usuario SET imagem = '${imagem}' WHERE idUsuario = ${idUsuario} ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function consultar(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario)
    var instrucao = `
        SELECT * FROM Usuario WHERE idUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarNome(nomeUsuario,idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", nomeUsuario, idUsuario)
    var instrucao = `
    UPDATE Usuario SET nomeUsuario = '${nomeUsuario}' WHERE idUsuario = ${idUsuario};
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}

function atualizarEmail(email,idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", email, idUsuario)
    var instrucao = `
    UPDATE Usuario SET email = '${email}' WHERE idUsuario = ${idUsuario}; 
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}

function atualizarSenha(senha, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", senha, idUsuario)
    var instrucao = `
    UPDATE Usuario SET senha = '${senha}' WHERE idUsuario = ${idUsuario}; 
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    inserirImg,
    consultar,
    atualizarNome,
    atualizarEmail,
    atualizarSenha
}