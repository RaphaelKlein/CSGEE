var quizModel = require("../models/quizModels");

function cadastrar(req, res) {

    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var fkUsuario = req.body.usuarioServer;
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    quizModel.cadastrar(acertos, erros, fkUsuario)
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

function autenticar(req, res) {
    var fkUsuario = req.body.idServer;

    quizModel.autenticar(fkUsuario)
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
    cadastrar,
    autenticar
}