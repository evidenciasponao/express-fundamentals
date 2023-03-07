/* esta es la forma de usar node para crear mi servidor

const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server on port 3000');
});
*/

// esta es la forma de usar express para crear mi servidor
const express = require('express');
const morgan = require('morgan');
const app = express();


/*
// middleware

function logger(req, res, next) {
    console.log('Route Received');
    next();
}
*/
app.use(express.json());
app.use(morgan('dev')); // importamos morgan como middleware de otra persona

/*
// primer ruta "all" la cual es una funcion de express
// para todas las rutas user

app.all('/user', (req, res) => {
    console.log('Por aqui paso');
    res.send('finish');
})
*/
/*
app.all('/user', (req, res, next) => { // hace la comprobacion y sige con la siguiente
    console.log('Por aqui paso');
    next();
})
*/


/*
app.get('/', (req, res) => {
    res.send('Hello World');
});
*/

// devolviendo un usuario


app.get('/user', (req, res) => { // peticion de un user y le devuelvo un json
    res.json({ // aplico un metodo json y envio un objeto de javascript
        username: 'Anderson',
        lastname: 'Montenegro'
    });
});


// enviando un usuario
/*
app.post('/user', (req, res) => {
    console.log(req.body); // visualizo el objeto que recibe los datos del fronted, y debo agregar un linea de codigo
    // antes de todas las rutas app.use(express.json()); para que pueda entender los archivo json
    res.send('POST REQUEST RECEIVED');
});
*/


/* hacemos una peticion post desde thunderclient enviamos
un objeto json con el siguiente body
{
  "username": "Anderson",
  "lastname": "Montenegro"
}

con este codigo ya puedo visualizar en consolo los datos que envio desde fronted
y dar una respuesta de que la peticion fue recibida

*/

// creando rutas dinamicas, recibiendo un parametro a travez de un dato enviado desde la url

// crear usuario

app.post('/user/:id', (req, res) => { // quiero recibir el id de un usuario "/:id"
    console.log(req.body); // visualizo el objeto que recibe los datos del fronted
    console.log(req.params); // recibo el parametro id
    res.send('POST REQUEST RECEIVED');
});

// eliminar usuario

app.delete('/user/:userId', (req, res) => { 
    res.send('User ' + req.params.userId + ' deleted');
});

// actualizar usuario

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send('User ' + req.params.id + ' updated')
})

/* realizo la peticion post desde thunderclient
envio el objeto json con el siguiente body a travez de la ruta

htt://localhost:3000/user/456

{
  "username": "Anderson",
  "lastname": "Montenegro"
}

de esta forma puedo visualizar por consola el dato del usuario que quiero
agregar y tambien tengo su id
*/


/*

app.get('/', (req, res) => { // la peticion get sirve para devolver cosas
    res.send('PETICION GET RECEIVED');
});

app.post('/about', (req, res) => { // la peticion sirve para recibir determinado dato, guardarlo en una base de datos, procesarlo y luego dar una respuesta
    res.send('POST REQUEST RECEIVED');
});

app.put('/contact', (req, res) => { // tambien puedo usar path que sirve para realizar un solo cambio 
    res.send('UPDATE REQUEST RECEIVED'); // la peticion put sirve para tomar los datos que me da el fronted para poder actualizarlos en una base de datos o aplicar determinada logica y luego devolver una respuesta 
});

app.delete('/test', (req, res) => { // la peticion delete sirve para eliminar un dato dentro del servidor y luego envio una respuesta 
    res.send('<h1>DELETE REQUEST RECEIVED</h1>');
});

*/

/*
app.get('/about', (req, res) => {
    res.send('About Me');
});

app.get('/contact', (req, res) => {
    res.send('Form contact');
});

app.get('/test', (req, res) => {
    res.send('<h1>This is a test</h1>');
});

*/

app.listen(5000, () => {
    console.log('Server on port 5000')
});