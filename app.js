//O principal objetivo deste desafio é fortalecer suas habilidades 
// em lógica de programação. Aqui você deverá desenvolver 
// a lógica para resolver o problema.

let listaAmigos = [];
let amigoNome;

function recebeTextoAmigo (){
    const amigo = document.getElementById('amigo');
    amigoNome = amigo.value.trim();    
}
function genId(){
    return Date.now();
}

function adicionarNomeNaLista(nomeFuncAdd){
    const nomeNaLista = document.createElement("li");
    const id = genId();
    nomeNaLista.id = id;
    nomeNaLista.className = 'friend-item';
    nomeNaLista.innerHTML = `
        <span>${nomeFuncAdd}</span>
        <div class="action-buttons">
            <img src="assets/trash.png" alt="Ícone de lixeira" width="20px" height="20px" onclick="deletarAmigo(${id})">
            <img src="assets/pencil.png" alt="Ícone de lápis" width="20px" height="20px" onclick="editarAmigo(${id})">
        </div>
    `;
    nomeNaLista.id = id;
    const listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.appendChild(nomeNaLista);
    console.log(listaAmigos);
    console.log(listaAmigos.length);

}

function limparInputAmigo(){
    document.getElementById('amigo').value = '';
}

function edicaoVisualizacao(modo){
    
    document.getElementById('listaAmigos').style.display = modo? 'none' : 'block'; 
    document.getElementById('resultado').style.display =  modo? 'block' : 'none';
    
}

function adicionarAmigo() {
    edicaoVisualizacao(false);
    recebeTextoAmigo();
    if (!amigoNome){
        alert('Por favor, digite um nome.');
        return;
    }
    if (listaAmigos.includes(amigoNome)){
        alert('Nome já foi adicionado, adicione identificadores.');
        limparInputAmigo();
        return;
    }
    listaAmigos.push(amigoNome);
    adicionarNomeNaLista(amigoNome);
    limparInputAmigo();
}

function gerarNumeroAleatorio(){
    let numAleatorio = parseInt(Math.random()*(listaAmigos.length));
    console.log(numAleatorio);
    return numAleatorio;
}

function editarAmigo(idFuncEditar){ 
    const amigoNalista = document.getElementById(idFuncEditar);
    const NomeAmigoNalista = amigoNalista.querySelector('span');
    const NomeAntigo = NomeAmigoNalista.textContent;
    let novoNome = prompt('Digite o novo nome:');
    if (!novoNome){
        alert('Por favor, digite um nome.');
        return;
    }

    if (listaAmigos.includes(novoNome)){
        alert('Nome já foi adicionado, adicione identificadores.');
        limparInputAmigo();
        return;
    }
    listaAmigos[listaAmigos.indexOf(NomeAntigo)] = novoNome;
    NomeAmigoNalista.textContent = novoNome;
    NomeAntigo = '';
    console.log(listaAmigos);
    console.log(listaAmigos.length);
}


function deletarAmigo(idFuncDeletar){
    const amigoNalista = document.getElementById(idFuncDeletar);
    const NomeAmigoNalista = amigoNalista.querySelector('span');
    listaAmigos.splice(listaAmigos.indexOf(NomeAmigoNalista.textContent), 1);
    amigoNalista.remove();
    console.log(listaAmigos);
    console.log(listaAmigos.length);
}

function sortearAmigo() {
    limparInputAmigo();

    let amigoEscolhido = listaAmigos[gerarNumeroAleatorio()];
    console.log(amigoEscolhido);
    edicaoVisualizacao(true);
    let textoEscolhido = `O amigo secreto sorteado é: ${amigoEscolhido}`;
    document.getElementById('resultado').innerHTML = textoEscolhido;

}