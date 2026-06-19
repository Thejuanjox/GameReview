const contenedor = document.getElementById('contenedor-juegos');

const cargarJuegos = async () => {
    try {
        const respuesta = await fetch('/api/juegos');
        const juegos = await respuesta.json();
        
        contenedor.innerHTML = '';
        
        if (juegos.length === 0) {
            contenedor.innerHTML = '<div class="col-12 text-center"><p>No hay reseñas publicadas aun.</p></div>';
            return;
        }

        juegos.forEach(juego => {
            const fecha = juego.fecha_lanzamiento.split('T')[0];
            
            contenedor.innerHTML += `
                <div class="col-md-4">
                    <div class="card h-100 bg-secondary bg-opacity-25 border-secondary shadow">
                        <img src="${juego.imagen_url}" class="card-img-top" alt="Portada" style="height: 240px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title fw-bold text-white">${juego.titulo}</h5>
                            <span class="badge bg-primary mb-2">${juego.genero}</span>
                            <span class="badge bg-warning text-dark mb-2 fw-bold">Puntuacion: ${juego.calificacion}</span>
                            <p class="card-text text-light mt-2">${juego.resena}</p>
                            <small class="text-muted">Lanzamiento: ${fecha}</small>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        contenedor.innerHTML = '<div class="col-12 text-center text-danger"><p>Error al cargar los juegos.</p></div>';
    }
};

cargarJuegos();