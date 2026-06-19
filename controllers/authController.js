const db = require('../config/db');

const login = (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Faltan datos' });
    }

    db.query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error en el servidor' });
        }
        
        if (results.length > 0) {
            req.session.logueado = true;
            req.session.usuario = username;
            res.json({ success: true });
        } else {
            res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
    });
};

const logout = (req, res) => {
    req.session.destroy();
    res.json({ success: true });
};

module.exports = { login, logout };