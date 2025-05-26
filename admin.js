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

//==============RESULTADOS GRAFICOS================= 
// Gráfico 1
 new Chart(document.getElementById('chart1'), {
    type: 'bar',
    data: {
      labels: ['BERT', 'AWS', 'Scrapy'],
      datasets: [{
        label: '',
        data: [15, 53, 22],
        backgroundColor: ['#007bff', '#00c0ef', '#36a2eb']
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } },
      plugins: {
            legend: {
                display: false // Desabilita a legenda
            }
        }
    }
  });

  // Gráfico 2
  new Chart(document.getElementById('chart2'), {
    type: 'bar',
    data: {
      labels: ['Python', 'Selenium', 'Java', 'SQL', 'NoSQL', 'Linux'],
      datasets: [{
        label: '',
        data: [84, 13, 81, 89, 83, 72],
        backgroundColor: ['#fce303', '#f7c106', '#f9a825', '#ff9800', '#ff5722', '#ff7043']
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } },
      plugins: {
            legend: {
                display: false // Desabilita a legenda
            }
        }
    }
  });

  // Gráfico 3
  new Chart(document.getElementById('chart3'), {
    type: 'bar',
    data: {
      labels: ['Criatividade', 'Analítico', 'Comunicação'],
      datasets: [{
          label: '',
        data: [37, 74, 68],
        backgroundColor: ['#66bb6a', '#43a047', '#a5d6a7']
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } },
      plugins: {
            legend: {
                display: false // Desabilita a legenda
            }
        }
    }
  });

  // Gráfico 4
  new Chart(document.getElementById('chart4'), {
    type: 'bar',
    data: {
      labels: ['Júnior', 'Pleno', 'Sênior'],
      datasets: [{
        label: '',
        data: [28, 30, 32],
        backgroundColor: ['#ba68c8', '#7e57c2', '#5e35b1']
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } },
      plugins: {
            legend: {
                display: false // Desabilita a legenda
            }
        }
    }
  });
//USER MENU
document.addEventListener('DOMContentLoaded', function() {
  setupUserDropdowns();
  
  setupMutationObserver();
});

function setupUserDropdowns() {
  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }

  document.querySelectorAll('.user-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
      e.stopPropagation();
      const menu = this.closest('.user-menu').querySelector('.dropdown-menu');
      
      if (menu.style.display !== 'block') {
        closeAllDropdowns();
      }
      
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.user-menu')) {
      closeAllDropdowns();
    }
  });
}

function setupMutationObserver() {
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
        setupUserDropdowns(); 
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
// ============== VAGAS SOLICITADAS ==============
function setupRequestedJobs() {
  const jobsData = [
    { id: 1, priority: 'Alta', date: '21/04/2025', requester: 'Rodrigo Silva', department: 'Software e Testes' },
    { id: 2, priority: 'Média', date: '19/04/2025', requester: 'Ricardo Bezerra', department: 'Monitoração' },
    { id: 3, priority: 'Média', date: '03/04/2025', requester: 'Fernanda Oliveira', department: 'Central de Atendimento' },
    { id: 4, priority: 'Baixa', date: '21/03/2025', requester: 'Agata Romero', department: 'Segurança Eletrônica' }
  ];

  // Seletores específicos para a tela de vagas solicitadas
  const jobsContainer = document.querySelector('.svagaAdm #jobsContainer');
  const searchInput = document.querySelector('.svagaAdm #searchInput');
  const searchButton = document.querySelector('.svagaAdm #searchButton');
  const priorityFilter = document.querySelector('.svagaAdm #priorityFilter');
  const dateFilter = document.querySelector('.svagaAdm #dateFilter');
  const applyFilters = document.querySelector('.svagaAdm #applyFilters');

  function renderJobs(jobs) {
    if (!jobsContainer) return;
    
    jobsContainer.innerHTML = '';

    if (jobs.length === 0) {
      jobsContainer.innerHTML = '<div class="no-jobs">Nenhuma vaga encontrada</div>';
      return;
    }

    jobs.forEach(job => {
      const priorityClass = `priority-${job.priority.toLowerCase()}`;

      const jobCard = document.createElement('div');
      jobCard.className = 'job-card';
      jobCard.innerHTML = `
        <div class="job-header">
          <span class="job-priority ${priorityClass}">${job.priority}</span>
          <span class="job-date">${job.date}</span>
        </div>
        <div class="job-info">
          <p><strong>Solicitante:</strong> ${job.requester}</p>
          <p><strong>Setor:</strong> ${job.department}</p>
        </div>
      `;

      jobsContainer.appendChild(jobCard);
    });
  }

  function filterJobs() {
    const searchTerm = searchInput.value.toLowerCase();
    const priorityValue = priorityFilter.value;
    const dateValue = dateFilter.value;

    let filteredJobs = jobsData.filter(job => {
      return (
        job.requester.toLowerCase().includes(searchTerm) ||
        job.department.toLowerCase().includes(searchTerm) ||
        job.priority.toLowerCase().includes(searchTerm) ||
        job.date.includes(searchTerm)
      );
    });

    if (priorityValue !== 'all') {
      filteredJobs = filteredJobs.filter(job =>
        job.priority.toLowerCase() === priorityValue.toLowerCase()
      );
    }

    if (dateValue === 'newest') {
      filteredJobs.sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        const dateB = new Date(b.date.split('/').reverse().join('-'));
        return dateB - dateA;
      });
    } else if (dateValue === 'oldest') {
      filteredJobs.sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        const dateB = new Date(b.date.split('/').reverse().join('-'));
        return dateA - dateB;
      });
    }

    renderJobs(filteredJobs);
  }

  // Adiciona os event listeners
  if (searchButton) {
    searchButton.addEventListener('click', filterJobs);
  }
  
  if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
        filterJobs();
      }
    });
  }
  
  if (applyFilters) {
    applyFilters.addEventListener('click', filterJobs);
  }

  // Renderiza os jobs inicialmente
  renderJobs(jobsData);
}

// Modifique o evento DOMContentLoaded para incluir esta função
document.addEventListener('DOMContentLoaded', function() {
  // ... seu código existente ...

  // Inicializa as vagas solicitadas quando a tela é carregada
  setupRequestedJobs();
  
  // Adiciona um observador para quando a tela de vagas solicitadas for aberta
  const linksVaga = document.querySelectorAll('a[href="#vaga"]');
  if (linksVaga) {
    linksVaga.forEach(link => {
      link.addEventListener('click', function() {
        // Pequeno delay para garantir que a tela foi renderizada
        setTimeout(setupRequestedJobs, 100);
      });
    });
  }
});
