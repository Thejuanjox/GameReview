const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
const PORT = 3000;

const authController = require('./controllers/authController');
const juegosController = require('./controllers/juegosController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'secreto123',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/admin', (req, res) => {
    if (req.session.logueado) {
        res.sendFile(path.join(__dirname, 'views', 'admin.html'));
    } else {
        res.redirect('/login');
    }
});

app.post('/api/login', authController.login);
app.post('/api/logout', authController.logout);

app.get('/api/juegos', juegosController.listar);
app.post('/api/juegos', juegosController.agregar);
app.put('/api/juegos/:id', juegosController.editar);
app.delete('/api/juegos/:id', juegosController.eliminar);

app.listen(PORT, () => {
    console.log('Servidor en puerto 3000');
});