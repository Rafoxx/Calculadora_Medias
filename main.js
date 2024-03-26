const form = document.getElementById('form-a');
const Aprovado = '<img src="./images/aprovado.png" alt="festejando">';
const Reprovado = '<img src="./images/reprovado.png" alt="decepcionado">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaminima = parseFloat(prompt("nota minima:"));


let linhas = '';

form.addEventListener('submit', function(event)  {
    event.preventDefault();

    adicionalinha();
    atualizatabela();
    mediafinal();
});

function adicionalinha() {
    const inputatividade = document.getElementById('atividade').value;
    const inputnota = parseFloat(document.getElementById('nota').value);

    const indexParExistente = atividades.findIndex((atividade, index) => atividade === inputatividade && notas[index] === inputnota);

        if (indexParExistente !== -1) {
            alert(`A atividade "${inputatividade}" com a nota ${inputnota} já foi inserida.`);
        } else {
            atividades.push(inputatividade);
            notas.push(inputnota);

            let linha = `<tr>`;
            linha += `<td>${inputatividade}</td>`;
            linha += `<td>${inputnota}</td>`;
            linha += `<td>${inputnota >= notaminima ? Aprovado : Reprovado }</td>`;
            linha += `</tr>`;

        document.querySelector('tbody').insertAdjacentHTML('beforeend', linha);
    }

    document.getElementById('atividade').value = '';
    document.getElementById('nota').value = '';
}



function atualizatabela() {
    const bodytabel = document.querySelector('tbody');
    bodytabel.innerHTML += linhas;
}

function mediafinal(){
    const mediafinal = calculamediafinal();

    document.getElementById('media-f').innerHTML = mediafinal;
    document.getElementById('resultado').innerHTML = mediafinal >=  notaminima ? spanAprovado :spanReprovado;
}

function calculamediafinal(){
    let somanotas = 0;

    for (let i = 0; i < notas.length;i++) {
            somanotas+=notas[i];
        }

        return somanotas / notas.length
}