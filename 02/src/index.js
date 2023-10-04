const express = require('express');
const { obterProximoJogador, removerJogador, adicionarJogador } = require('./controladores/jogadores');
const app = express();


app.get('/', (req, res) => {
    const proximoJogador = obterProximoJogador();
    res.send(`É a vez de ${proximoJogador} jogar!`);
});

app.get('/remover', (req, res) => {
    const indice = parseInt(req.query.indice);
    const resultado = removerJogador(indice);
    res.json(resultado);
});

app.get('/adicionar', (req, res) => {
    const nome = req.query.nome;
    const indice = parseInt(req.query.indice);
    const resultado = adicionarJogador(nome, indice);
    res.json(resultado);
});

app.listen(8000);