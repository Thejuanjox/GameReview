const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'resenas_juegos'
});

db.connect((err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('DB OK');
});

module.exports = db;