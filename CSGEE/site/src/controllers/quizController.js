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

