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

    perfilModel.atualizarNome(nomeUsuario, idUsuario)
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

function enviarFeedback(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.idServer;
    var comentario = req.body.comentarioServer;
    var nota = req.body.avaliacaoServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    perfilModel.enviarFeedback(fkUsuario, comentario, nota)
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

function verificar(req, res) {
    var fkUsuario = req.body.idServer;
    perfilModel.verificar(fkUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pegarQuiz(req, res) {
    var fkUsuario = req.body.idServer;

    perfilModel.pegarQuiz(fkUsuario)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado[0]);
                } else if (resultado.length == 0) {
                    res.status(403).send("Quiz ainda não realizado");
                } else {
                    res.status(403).send("Quiz realizado mais de uma vez!");
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

module.exports = {
    inserirImg,
    consultar,
    atualizarNome,
    atualizarEmail,
    atualizarSenha,
    enviarFeedback,
    verificar,
    pegarQuiz
}