const jogadores = require('../bancodedados');
let indiceInicial = 0;


const obterProximoJogador = () => {
    const jogador = jogadores[indiceInicial];
    indiceInicial = (indiceInicial + 1) % jogadores.length;
    return jogador;
};

const removerJogador = (indice) => {
    if (indice < 0 || indice >= jogadores.length) {
        return "Não existem jogadores no índice informado (" + indice + ") para ser removido.";
    }
    jogadores.splice(indice, 1);
    return jogadores;
};

const adicionarJogador = (nome, indice) => {
    const novoJogador = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    if(indice === undefined || indice >= jogadores.length) {
        jogadores.push(novoJogador);
    } else if(indice < 0) {
        return "O valor informado (" + indice + ") não existe. O jogador não foi adicionado.";
    } else {
        jogadores.splice(indice, 0 , novoJogador);
    }
    return jogadores;
};

module.exports = {
    obterProximoJogador,
    removerJogador,
    adicionarJogador
}