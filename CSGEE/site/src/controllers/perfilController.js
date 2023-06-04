var perfilModel = require("../models/perfilModels");

function inserirImg(req, res) {

    var idUsuario = req.body.idServer;
    var imagem = req.body.imgServer;
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    perfilModel.inserirImg(idUsuario, imagem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function consultar(req, res) {
    var idUsuario = req.body.idServer;

    perfilModel.consultar(idUsuario)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado[0]);
                } else if (resultado.length == 0) {
                    res.status(403).send("ERRO");
                } else {
                    res.status(403).send("MAIS DE UM LOGIN COM O MESMO USUARIO");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizarNome(req, res) {
    var nomeUsuario = req.body.nomeServer
    var idUsuario = req.body.idServer

    perfilModel.atualizarNome(nomeUsuario,idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}
function atualizarEmail(req, res) {
    var email = req.body.emailServer;
    var idUsuario = req.body.idServer

    perfilModel.atualizarEmail(email, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}
function atualizarSenha(req, res) {
    var senha = req.body.senhaServer;
    var idUsuario = req.body.idServer

    perfilModel.atualizarSenha(senha, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}


module.exports = {
    inserirImg,
    consultar,
    atualizarNome,
    atualizarEmail,
    atualizarSenha
}