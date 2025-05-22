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
    // Seleção das telas
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
        const telas = [telaUsuario, telaDescricao, telaResultados, telaVagaSolicitada, telaGeral];
        telas.forEach(tela => {
            if (tela) tela.style.display = 'none';
        });
    }

    esconderTelas();
    if (telaUsuario) telaUsuario.style.display = 'block';

    if (vagas) {
        vagas.forEach(vaga => {
            vaga.addEventListener('click', () => {
                esconderTelas();
                if (telaDescricao) telaDescricao.style.display = 'block';
            });
        });
    }

    if (btnResultados) {
        btnResultados.addEventListener('click', () => {
            esconderTelas();
            if (telaResultados) telaResultados.style.display = 'block';
        });
    }

    if (linksVaga) {
        linksVaga.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                esconderTelas();
                if (telaVagaSolicitada) telaVagaSolicitada.style.display = 'block';
            });
        });
    }

    if (linksGeral) {
        linksGeral.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                esconderTelas();
                if (telaGeral) telaGeral.style.display = 'block';
            });
        });
    }

    if (linksHome) {
        linksHome.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                esconderTelas();
                if (telaUsuario) telaUsuario.style.display = 'block';
            });
        });
    }
});