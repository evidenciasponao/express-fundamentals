const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/user', (req, res) => { // peticion de un user y le devuelvo un json
    res.json({ // aplico un metodo json y envio un objeto de javascript
        username: 'Anderson',
        lastname: 'Montenegro'
    });
});

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
    res.send('User ' + req.params.id + ' updated');
});

app.listen(5000, () => {
    console.log('Server on port 5000');
});