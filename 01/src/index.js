const express = require('express');
const app = express();

app.get('/somar', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let resultado = num1 + num2;
    res.send(resultado.toString());
});

app.get('/subtrair', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let resultado = num1 - num2;
    res.send(resultado.toString());
});

app.get('/multiplicar', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let resultado = num1 * num2;
    console.log(req.query);
    res.send(resultado.toString());
});

app.get('/dividir', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let resultado = num1 / num2;
    console.log(req.query);
    res.send(resultado.toString());
});

app.listen(3000, () => {
    console.log()
})




