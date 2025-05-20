document.addEventListener('DOMContentLoaded', function () {
  const jobsData = [
    { id: 1, priority: 'Alta', date: '21/04/2025', requester: 'Rodrigo Silva', department: 'Software e Testes' },
    { id: 2, priority: 'Média', date: '19/04/2025', requester: 'Ricardo Bezerra', department: 'Monitoração' },
    { id: 3, priority: 'Média', date: '03/04/2025', requester: 'Fernanda Oliveira', department: 'Central de Atendimento' },
    { id: 4, priority: 'Baixa', date: '21/03/2025', requester: 'Agata Romero', department: 'Segurança Eletrônica' }
  ];

  const jobsContainer = document.getElementById('jobsContainer');
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const priorityFilter = document.getElementById('priorityFilter');
  const dateFilter = document.getElementById('dateFilter');
  const applyFilters = document.getElementById('applyFilters');
  const navItems = document.querySelectorAll('.nav-item');
  const navIndicator = document.querySelector('.nav-indicator');

  const userIcon = document.getElementById("userIcon");
  const dropdownMenu = document.getElementById("dropdownMenu");

  userIcon.addEventListener("click", () => {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!userIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });

  function updateNavIndicator(element) { 
    navIndicator.style.width = `${element.offsetWidth}px`;
    navIndicator.style.transform = `translateX(${element.offsetLeft}px)`;
  }

  navItems.forEach(item => {
    item.addEventListener('click', function () {
      navItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      updateNavIndicator(this);
    });
  });

  const activeNav = document.querySelector('.nav-item.active');
  if (activeNav) {
    updateNavIndicator(activeNav);
  }

  function renderJobs(jobs) {
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

    let filteredJobs = jobsData.filter(job =>
      job.requester.toLowerCase().includes(searchTerm) ||
      job.department.toLowerCase().includes(searchTerm) ||
      job.priority.toLowerCase().includes(searchTerm) ||
      job.date.includes(searchTerm)
    );

    if (priorityValue !== 'all') {
      filteredJobs = filteredJobs.filter(job =>
        job.priority.toLowerCase() === priorityValue
      );
    }

    if (dateValue === 'newest') {
      filteredJobs.sort((a, b) => new Date(b.date.split('/').reverse().join('-')) - new Date(a.date.split('/').reverse().join('-')));
    } else if (dateValue === 'oldest') {
      filteredJobs.sort((a, b) => new Date(a.date.split('/').reverse().join('-')) - new Date(b.date.split('/').reverse().join('-')));
    }

    renderJobs(filteredJobs);
  }

  searchButton.addEventListener('click', filterJobs);
  searchInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      filterJobs();
    }
  });
  applyFilters.addEventListener('click', filterJobs);

  renderJobs(jobsData);
});
  
