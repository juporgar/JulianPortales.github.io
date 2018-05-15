const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/quienessomos', (req, res) => res.send("Quienes somos"));

app.listen(3000, () => console.log('Servidor levantado en 3000'));

app.get('/hola/:name', (req, res) => {
    var name = req.params.name;
    res.send(`hola ${name}`);
});

app.get('/multiplica/:x/:y', (req, res) => {
    var multi = req.params.x * req.params.y;
    res.send(`la solucion es: ${multi}`);
});

//ej1

app.get('/multiplicar/:x/:y', (req, res) => {
    let q = req.params.x;
    let s = req.params.y;
    if(isNaN(q) === true){
        res.send(`Debes de introducir un numero`);
    }else if(isNaN(s) === true){
        res.send(`Debes de introducir un numero`);
    }else{
       res.send(`El resultado es: ${ q * s}`);     
    }
});

//ej2

app.get('/junta/:n/:a', (req, res) => {
    var name = req.params.n;
    var nam = req.params.a;
    res.send(`junta ${name} con ${nam}`);
});

//ej3

app.use((req, res, next) => {
    res.status(404).send("Lo siento, no puedo entrar ahí");
 });