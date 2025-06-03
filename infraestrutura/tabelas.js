class Tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaUsuario();
    }
    criarTabelaUsuario() {
    const sql = `CREATE TABLE IF NOT EXISTS usuario (
    id_usuario int NOT NULL AUTO_INCREMENT,
    nome_usuario varchar(45) NOT NULL,
    setor varchar(45) NOT NULL,
    cargo varchar(45) NOT NULL,
    tipo_usuario enum('gestor','administrador') NOT NULL,
    PRIMARY KEY (id_usuario)
    )`;
    this.conexao.query(sql, (error) => {
        if(error) {
            console.log('Erro ao criar tabela usuario');
            console.log(error.message);
            return 
        } else {
            console.log('Tabela usuario criada com sucesso');
        }
    });
    }
}
module.exports = new Tabelas();