const { Router } = require("express");
const router = Router();
const vagasControle = require("../controllers/controles")

//métodos get post put delete
router.get("/criarvagas", (req, res) =>{
    const resposta = vagasControle.buscar();
    res.send(resposta);
});
router.post("/criarvagas", (req, res) =>{
    const resposta = vagasControle.criar();
    res.send(resposta);
});
router.put("/criarvagas/:id", (req, res) =>{
    const { id } = req.params
    const resposta = vagasControle.atualizar(id);
    res.send(resposta);
});
router.delete("/criarvagas/:id", (req, res) =>{
    const { id } = req.params
    const resposta = vagasControle.deletar
    (id);
    res.send(resposta);
});

module.exports = router;
