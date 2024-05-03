document.addEventListener('DOMContentLoaded', function() {
    console.log("Documento carregado");
    
    const sobreMimBtn = document.getElementById('sobreMimBtn');
    const conteudoSobreMim = document.getElementById('conteudoSobreMim');
    const conteudoPortfolio = document.getElementById('conteudoPortfolio');

    sobreMimBtn.addEventListener('click', function() {
        console.log("Clicou em Sobre Mim");
        conteudoSobreMim.style.display = 'block';
        conteudoPortfolio.style.display = 'none';
    });

    const portfolioBtn = document.getElementById('portfolioBtn');

    portfolioBtn.addEventListener('click', function() {
        console.log("Clicou em Portfolio");
        conteudoSobreMim.style.display = 'none';
        conteudoPortfolio.style.display = 'block';
    });
});