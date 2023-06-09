var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.put("/inserirImg", function (req, res) {
    perfilController.inserirImg(req, res);
});

router.post("/consultar", function (req, res) {
    perfilController.consultar(req, res);
});

router.put("/atualizarNome", function (req, res) {
    perfilController.atualizarNome(req, res);
});

router.put("/atualizarEmail", function (req, res) {
    perfilController.atualizarEmail(req, res);
});

router.put("/atualizarSenha", function (req, res) {
    perfilController.atualizarSenha(req, res);
});

router.post("/enviarFeedback", function (req, res) {
    perfilController.enviarFeedback(req, res);
})

router.post("/verificar", function (req, res) {
    perfilController.verificar(req, res);
})

router.post("/pegarQuiz", function (req, res) {
    perfilController.pegarQuiz(req, res);
})
module.exports = router;