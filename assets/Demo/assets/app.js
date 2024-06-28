const inputCep = document.getElementById('inputCep');
const cep = document.getElementById('cep');
const logradouro = document.getElementById('logradouro');
const bairro = document.getElementById('bairro');
const uf = document.getElementById('uf');
const cidade = document.getElementById('cidade');
const ibge = document.getElementById('ibge');
const tabelaCEP = document.getElementById('tabelaCEP');
let listaConsultas = [];

carregarDados();

function buscarCEP() {
    let cepValor = inputCep.value;
    fetch(`https://viacep.com.br/ws/${cepValor}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                preencherCampos(data);
                adicionarConsulta(data);
            } else {
                alert('CEP não encontrado');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Insira um CEP válido');
        });
}

function preencherCampos(data) {
    cep.value = data.cep;
    logradouro.value = data.logradouro;
    bairro.value = data.bairro;
    uf.value = data.uf;
    cidade.value = data.localidade;
    ibge.value = data.ibge;
}

function salvarDados() {
    localStorage.setItem('listaConsultas', JSON.stringify(listaConsultas));
    mostrarConsultas();
}

function adicionarConsulta(data) {
    listaConsultas.push({
        cep: data.cep,
        logradouro: data.logradouro,
        bairro: data.bairro,
        uf: data.uf,
        localidade: data.localidade,
        ibge: data.ibge
    });
}

function mostrarConsultas() {
    tabelaCEP.innerHTML = '';
    const cabecalho = `
    <thead>
        <tr>
            <th>CEP</th>
            <th>Logradouro</th>
            <th>Bairro</th>
            <th>UF</th>
            <th>Cidade</th>
            <th>IBGE</th>
            <th>Ações</th>
        </tr>
    </thead>
`;
tabelaCEP.insertAdjacentHTML('beforeend', cabecalho);

listaConsultas.forEach(consulta => {
        const novaLinha = document.createElement('tr');
        tabelaCEP.appendChild(novaLinha);

        const tdCep = document.createElement('td');
        tdCep.innerText = consulta.cep;
        novaLinha.appendChild(tdCep);

        const tdLogradouro = document.createElement('td');
        tdLogradouro.innerText = consulta.logradouro;
        novaLinha.appendChild(tdLogradouro);

        const tdBairro = document.createElement('td');
        tdBairro.innerText = consulta.bairro;
        novaLinha.appendChild(tdBairro);

        const tdUf = document.createElement('td');
        tdUf.innerText = consulta.uf;
        novaLinha.appendChild(tdUf);

        const tdCidade = document.createElement('td');
        tdCidade.innerText = consulta.localidade;
        novaLinha.appendChild(tdCidade);

        const tdIbge = document.createElement('td');
        tdIbge.innerText = consulta.ibge;
        novaLinha.appendChild(tdIbge);

        const tdBtnDeletar = document.createElement('td');
        novaLinha.appendChild(tdBtnDeletar);

        const btnDeletar = document.createElement('button');
        btnDeletar.innerText = 'Deletar';
        btnDeletar.addEventListener('click', () => deletarLinha(consulta));
        btnDeletar.className = 'btnDeletar';
        tdBtnDeletar.appendChild(btnDeletar);
    });
}

function carregarDados() {
    const consultasSalvas = localStorage.getItem('listaConsultas');
    if (consultasSalvas) {
        listaConsultas = JSON.parse(consultasSalvas);
    }
    mostrarConsultas();
}

function deletarLinha(consulta) {
    const indice = listaConsultas.indexOf(consulta);
    if (indice !== -1) {
        listaConsultas.splice(indice, 1);
        mostrarConsultas();
        salvarDados();
    }
}
