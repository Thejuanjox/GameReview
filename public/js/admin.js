const tbody = document.getElementById('cuerpo-tabla');
const plantilla = document.getElementById('plantilla-fila');
const inputId = document.getElementById('juego-id');
const inputTitulo = document.getElementById('input-titulo');
const inputGenero = document.getElementById('input-genero');
const inputCalificacion = document.getElementById('input-calificacion');
const inputFecha = document.getElementById('input-fecha');
const inputImagen = document.getElementById('input-imagen');
const inputResena = document.getElementById('input-resena');
const tituloForm = document.getElementById('titulo-form');

const btnGuardar = document.getElementById('btn-guardar');
const btnCancelar = document.getElementById('btn-cancelar');
const btnLogout = document.getElementById('btn-logout');

const cargarDatos = async () => {
    try {
        const respuesta = await fetch('/api/juegos');
        const juegos = await respuesta.json();
        tbody.innerHTML = '';

        if (juegos.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="text-center">No hay registros</td></tr>';
            return;
        }

        juegos.forEach(juego => {
            const clon = plantilla.content.cloneNode(true);
            const fecha = juego.fecha_lanzamiento.split('T')[0];
            
            clon.querySelector('.col-id').textContent = juego.id;
            clon.querySelector('.col-titulo').textContent = juego.titulo;
            clon.querySelector('.col-genero').textContent = juego.genero;
            clon.querySelector('.col-nota').textContent = juego.calificacion;
            clon.querySelector('.col-fecha').textContent = fecha;

            clon.querySelector('.btn-editar').addEventListener('click', () => {
                inputId.value = juego.id;
                inputTitulo.value = juego.titulo;
                inputGenero.value = juego.genero;
                inputCalificacion.value = juego.calificacion;
                inputFecha.value = fecha;
                inputImagen.value = juego.imagen_url;
                inputResena.value = juego.resena;
                tituloForm.textContent = 'Editar Juego';
            });

            clon.querySelector('.btn-eliminar').addEventListener('click', async () => {
                const confirmacion = confirm('Estas seguro de que deseas eliminar esta reseña?');
                if (confirmacion) {
                    const res = await fetch(`/api/juegos/${juego.id}`, { method: 'DELETE' });
                    if (res.ok) cargarDatos();
                }
            });

            tbody.appendChild(clon);
        });
    } catch (err) {}
};

btnGuardar.addEventListener('click', async () => {
    const id = inputId.value;
    const titulo = inputTitulo.value.trim();
    const genero = inputGenero.value.trim();
    const calificacion = inputCalificacion.value;
    const fecha_lanzamiento = inputFecha.value;
    const imagen_url = inputImagen.value.trim();
    const resena = inputResena.value.trim();

    if (!titulo || !genero || !calificacion || !fecha_lanzamiento || !imagen_url || !resena) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const valorPuntuacion = parseFloat(calificacion);
    if (valorPuntuacion < 1 || valorPuntuacion > 10) {
        alert('La puntuacion debe ser un numero entre 1 y 10.');
        return;
    }

    const metodo = id ? 'PUT' : 'POST';
    const url = id ? `/api/juegos/${id}` : '/api/juegos';

    const respuesta = await fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, genero, calificacion, fecha_lanzamiento, resena, imagen_url })
    });

    if (respuesta.ok) {
        inputId.value = '';
        inputTitulo.value = '';
        inputGenero.value = '';
        inputCalificacion.value = '';
        inputFecha.value = '';
        inputImagen.value = '';
        inputResena.value = '';
        tituloForm.textContent = 'Registrar Juego';
        cargarDatos();
    }
});

btnCancelar.addEventListener('click', () => {
    inputId.value = '';
    inputTitulo.value = '';
    inputGenero.value = '';
    inputCalificacion.value = '';
    inputFecha.value = '';
    inputImagen.value = '';
    inputResena.value = '';
    tituloForm.textContent = 'Registrar Juego';
});

btnLogout.addEventListener('click', async () => {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/';
});

cargarDatos();