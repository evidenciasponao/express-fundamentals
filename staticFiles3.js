const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/user', (req, res) => { 
    res.json({ 
        username: 'Anderson',
        lastname: 'Montenegro'
    });
});

// crear usuario

app.post('/user/:id', (req, res) => { 
    console.log(req.body); 
    console.log(req.params); 
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

// middleware para archivos estaticos

app.use(express.static('public'));

// inicia la aplicacion

app.listen(5000, () => {
    console.log('Server on port 5000');
});