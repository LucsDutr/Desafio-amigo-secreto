# Amigo Secreto

Este projeto é uma aplicação simples para gerenciar e sortear nomes em um jogo de Amigo Secreto. Ele permite adicionar nomes à lista, visualizá-los e sortear um nome aleatoriamente.

## Funcionalidades

- **Adicionar Nomes**: Insira nomes na lista de participantes.
- **Visualizar Lista**: Veja todos os nomes adicionados.
- **Sortear Amigo Secreto**: Sorteie um nome aleatoriamente da lista.

## Como Usar

1. **Adicionar Nomes**:
   - Digite o nome no campo de entrada.
   - Clique em "Adicionar" para incluir o nome na lista.

2. **Sortear Amigo Secreto**:
   - Após adicionar os nomes, clique em "Sortear amigo" para escolher um nome aleatoriamente.
   - O nome sorteado será exibido na tela.

## Estrutura do Projeto

- **`index.html`**: Contém a estrutura HTML da aplicação.
- **`style.css`**: Define os estilos da aplicação.
- **`app.js`**: Implementa a lógica para adicionar nomes, sortear, editar e excluir.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Conhecimentos Apreendidos

Nesse primeiro desafio, encarei minhas primeiras dificuldades com os métodos DOM (Document Object Model).
Além de encontrar soluções como o `createElement` e `appendChild`, tive meu primeiro contato com configuração de exibição no `HTML`, usando tanto `style.display=none` como o `style.display=block`. Também descobri um método de editar elementos no HTML usando Templates Strings, exemplo:

```javascript
const nomeNaLista = document.createElement("li");
nomeNaLista.innerHTML = `
    <span>${nomeFuncAdd}</span>
    <div class="action-buttons">
        <img src="assets/trash.png" alt="Ícone de lixeira" width="20px" height="20px" onclick="deletarAmigo(${id})">
        <img src="assets/pencil.png" alt="Ícone de lápis" width="20px" height="20px" onclick="editarAmigo(${id})">
    </div>
`;

```

Tudo isso que estiver dentro do `innerHTML` é renderizado como HTML.

## Como Executar

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` no seu navegador.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
