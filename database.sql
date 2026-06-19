CREATE DATABASE resenas_juegos;
USE resenas_juegos;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE videojuegos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    calificacion DECIMAL(3,1) NOT NULL,
    fecha_lanzamiento DATE NOT NULL,
    resena TEXT NOT NULL,
    imagen_url VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (username, password) VALUES ('admin', 'admin123');

INSERT INTO videojuegos (titulo, genero, calificacion, fecha_lanzamiento, resena, imagen_url) VALUES 
('Minecraft', 'Aventura', 10.0, '2011-11-18', 'El mejor juego de construccion y supervivencia con libertad total para crear.', 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a'),
('Grand Theft Auto V', 'Accion', 9.8, '2013-09-17', 'Un mundo abierto impresionante con una historia fascinante y accion sin limite.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7kVeER4_Aol7o9duLhOhI_dXj-Y4tfpzrCGjEwhE09TlWmYlu5jB_HSo&s=10');