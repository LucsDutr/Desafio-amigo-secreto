//O principal objetivo deste desafio é fortalecer suas habilidades 
// em lógica de programação. Aqui você deverá desenvolver 
// a lógica para resolver o problema.

let listaAmigos = [];
let amigoNome;

function recebeTextoAmigo (){
    const amigo = document.getElementById('amigo');
    amigoNome = amigo.value.trim();    
}

function adicionarNomeNaLista(nomeFuncAdd){
    const nomeNaLista = document.createElement("li");
    nomeNaLista.id = "id-" + nomeFuncAdd;
    nomeNaLista.textContent = nomeFuncAdd;
    document.getElementById("listaAmigos").appendChild(nomeNaLista);
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

function sortearAmigo() {
    limparInputAmigo();
    let amigoEscolhido = listaAmigos[gerarNumeroAleatorio()];
    console.log(amigoEscolhido);
    edicaoVisualizacao(true);
    let textoEscolhido = `O amigo secreto sorteado é: ${amigoEscolhido}`;
    document.getElementById('resultado').innerHTML = textoEscolhido;

}