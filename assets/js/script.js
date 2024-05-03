document.addEventListener('DOMContentLoaded', function() {
    console.log("Documento carregado");
    
    const sobreMimBtn = document.getElementById('sobreMimBtn');
    const conteudoSobreMim = document.getElementById('conteudoSobreMim');
    const portfolioBtn = document.getElementById('portfolioBtn');
    const conteudoPortfolio = document.getElementById('conteudoPortfolio');
    const contatoBtn = document.getElementById('contatoBtn');
    let confirm = confirm('Você sera redirecionado ao Whatsapp. Deseja Prosseguir?');

    sobreMimBtn.addEventListener('click', function() {
        console.log("Clicou em Sobre Mim");
        conteudoSobreMim.style.display = 'block';
        conteudoPortfolio.style.display = 'none';
    });


    portfolioBtn.addEventListener('click', function() {
        console.log("Clicou em Portfolio");
        conteudoSobreMim.style.display = 'none';
        conteudoPortfolio.style.display = 'block';
    });
});

sobreMimBtn.addEventListener('click', function() {
    sobreMimBtn.classList.add('ativo');
    portfolioBtn.classList.remove('ativo');
    contatoBtn.classList.remove('ativo');
});

portfolioBtn.addEventListener('click', function() {
    sobreMimBtn.classList.remove('ativo');
    contatoBtn.classList.remove('ativo');
    portfolioBtn.classList.add('ativo');
});

contatoBtn.addEventListener('click',function() {
    sobreMimBtn.classList.remove('ativo');
    portfolioBtn.classList.remove('ativo');
    contatoBtn.classList.add('ativo');
    let confirmacao = confirm('Você será redirecionado ao WhatsApp. Deseja prosseguir?');
        if (confirmacao) {
            window.location.href = 'https://wa.me/5541999381544';
}})

