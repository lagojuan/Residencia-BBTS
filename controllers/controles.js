class vagasControle {
    buscar (){
        return "Procurando vaga";
    }
    criar (){
        return "Criar vaga";
    }
    atualizar(id){
        return "Sistema atualizado" + id;
    }
    deletar(id){
        return "vaga deletada" + id;
    }
}

module.exports = new vagasControle();