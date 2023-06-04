var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    quizController.autenticar(req, res);
});

module.exports = router;