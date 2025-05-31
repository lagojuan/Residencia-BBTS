const { Router } = require("express");
const router = Router();

// get post put delete
router.get("/criarvagas", (req, res) =>{
    res.send("Dados recebidos");
});
router.post("/criarvagas", (req, res) =>{
    res.send("Enviando...");
});
router.put("/criarvagas/:id", (req, res) =>{
    const { id } = req.params
    res.send('Atualizando' + id +  '...');
});
router.delete("/criarvagas/:id", (req, res) =>{
     const { id } = req.params
    res.send("Dados recebidos" +id);
});

module.exports = router;
