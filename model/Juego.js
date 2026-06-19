class Juego {
    constructor(id, titulo, genero, calificacion, fecha_lanzamiento, resena, imagen_url) {
        this.id = id;
        this.titulo = titulo;
        this.genero = genero;
        this.calificacion = calificacion;
        this.fecha_lanzamiento = fecha_lanzamiento;
        this.resena = resena;
        this.imagen_url = imagen_url;
    }
}

module.exports = Juego;