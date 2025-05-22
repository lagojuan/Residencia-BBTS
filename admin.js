//Pesquisa Tela Inicial 
  document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const vagas = document.querySelectorAll('.vaga');

    function realizarBusca() {
        const termo = searchInput.value.toLowerCase();

        vagas.forEach(card => {
            const titulo = card.querySelector('h2').textContent.toLowerCase();
            if (titulo.includes(termo)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    searchBtn.addEventListener('click', function () {
        realizarBusca();
    });
    // Pressionar Enter
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            realizarBusca();
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const telaUsuario = document.querySelector('.tela-admin');
    const telaDescricao = document.querySelector('.descricao');
    const telaResultados = document.querySelector('.resultadoadm');
    const telaVagaSolicitada = document.querySelector('.svagaAdm');
    const telaGeral = document.querySelector('.geral');

    const vagas = document.querySelectorAll('.vaga');
    const btnResultados = document.getElementById('resultados');

    const linksHome = document.querySelectorAll('a[href="#home"]');
    const linksVaga = document.querySelectorAll('a[href="#vaga"]');
    const linksGeral = document.querySelectorAll('a[href="#geral"]');

    function esconderTelas() {
        telaUsuario.style.display = 'none';
        telaDescricao.style.display = 'none';
        telaResultados.style.display = 'none';
        telaVagaSolicitada.style.display = 'none';
        telaGeral.style.display = ''
    }

    esconderTelas();
    telaUsuario.style.display = 'block';

    // Clique em vaga para abrir a descrição
    vagas.forEach(vaga => {
        vaga.addEventListener('click', () => {
            esconderTelas();
            telaDescricao.style.display = 'block';
        });
    });

    // Clique em Resultados
    if (btnResultados) {
        btnResultados.addEventListener('click', () => {
            esconderTelas();
            telaResultados.style.display = 'block';
        });
    }

    // Clique em "Solicitar Vaga"
    linksVaga.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            esconderTelas();
            telaVagaSolicitada.style.display = 'block';
        });
    });
        // Clique em "Gera"
    linksVaga.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            esconderTelas();
            telaGeral.style.display = 'block';
        });
    });

    // Clique em "Início"
    linksHome.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            esconderTelas();
            telaUsuario.style.display = 'block';
        });
    });
});
