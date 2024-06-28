const username = 'GustavoNbs';

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
        const repos = data;

        repos.forEach(repo => {
            const card = `
                <div class="card text-bg-dark bordacard mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${repo.name}</h5>
                        <p class="card-text">${repo.description ? repo.description : 'Descrição não disponível'}</p>
                        <button type="button" class="btn botaoteste" onclick="window.open('${repo.html_url}', '_blank');">
                            Repositório
                        </button>
                        <button type="button" class="btn botaoteste" ${repo.homepage ? `onclick="window.open('${repo.homepage}', '_blank');"` : 'disabled'}>
                            GitHub Pages
                        </button>
                    </div>
                </div>
            `;
            
            document.getElementById('CardsAPI').innerHTML += card;
        });
    })
    .catch(error => console.error('Erro:', error));

    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });