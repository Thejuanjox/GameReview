const db = require('../config/db');
const Juego = require('../model/Juego');

const listar = (req, res) => {
    db.query('SELECT * FROM videojuegos', (err, filas) => {
        if (err) {
            return res.status(500).json({ error: 'Error DB' });
        }
        res.json(filas);
    });
};

const agregar = (req, res) => {
    const { titulo, genero, calificacion, fecha_lanzamiento, resena, imagen_url } = req.body;
    
    if (!titulo || !genero || !calificacion || !fecha_lanzamiento || !resena || !imagen_url) {
        return res.status(400).json({ error: 'Faltan datos' });
    }

    db.query('INSERT INTO videojuegos (titulo, genero, calificacion, fecha_lanzamiento, resena, imagen_url) VALUES (?, ?, ?, ?, ?, ?)', 
    [titulo, genero, calificacion, fecha_lanzamiento, resena, imagen_url], (err, resultado) => {
        if (err) {
            return res.status(500).json({ error: 'Error DB' });
        }
        res.status(201).json({ id: resultado.insertId, titulo, genero, calificacion, fecha_lanzamiento, resena, imagen_url });
    });
};

const editar = (req, res) => {
    const { id } = req.params;
    const { titulo, genero, calificacion, fecha_lanzamiento, resena, imagen_url } = req.body;

    db.query('UPDATE videojuegos SET titulo = ?, genero = ?, calificacion = ?, fecha_lanzamiento = ?, resena = ?, imagen_url = ? WHERE id = ?', 
    [titulo, genero, calificacion, fecha_lanzamiento, resena, imagen_url, id], (err, resultado) => {
        if (err) {
            return res.status(500).json({ error: 'Error DB' });
        }
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ error: 'No encontrado' });
        }
        res.json({ success: true });
    });
};

const eliminar = (req, res) => {
    const { id } = req.params;
    
    db.query('DELETE FROM videojuegos WHERE id = ?', [id], (err, resultado) => {
        if (err) {
            return res.status(500).json({ error: 'Error DB' });
        }
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ error: 'No encontrado' });
        }
        res.json({ success: true });
    });
};

module.exports = { listar, agregar, editar, eliminar };