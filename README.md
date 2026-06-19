# GameReview - Sistema de Resenas de Videojuegos

## 1. Integrantes del Grupo
- Juan Garay: Desarrollo del backend (Node.js, Express), configuracion de la base de datos MySQL, estructuracion del patron MVC y creacion de la API REST.
- Benjamin Cerda: Desarrollo del frontend (HTML, Bootstrap), integracion de la API con JavaScript (fetch/async-await), manipulacion del DOM y validaciones de formularios.

## 2. Descripcion del Proyecto
GameReview es una plataforma web del sector de entretenimiento que permite a los usuarios visualizar reseñas de videojuegos clasificados por genero y nota. Resuelve el problema de la organizacion de datos al contar con un panel de administracion centralizado para gestionar el catalogo completo.

## 3. Requisitos Previos
- Node.js (Version 18 o superior recomendada).
- XAMPP (Para ejecutar los servicios de Apache y MySQL).
- Navegador web moderno.

## 4. Instalacion Paso a Paso
1. Clonar o descargar el proyecto en el equipo local.
2. Abrir XAMPP e iniciar los modulos de Apache y MySQL.
3. Importar el archivo `database.sql` en phpMyAdmin.
4. Abrir la carpeta del proyecto en la terminal.
5. Ejecutar el comando `npm install` para instalar las dependencias.
6. Ejecutar el comando `npm start` para iniciar el servidor.

## 5. Configuracion de la Base de Datos
- Nombre de la base de datos: `resenas_juegos`
- Usuario: `root`
- Contrasena: (vacia)
- El archivo para importar se encuentra en la raiz del proyecto bajo el nombre `database.sql`.

## 6. Credenciales de Prueba
Para acceder al panel de administracion protegido:
- Usuario: admin
- Contrasena: admin123

## 7. Uso del Sistema
- Vista Publica: Al iniciar, navegue a `http://localhost:3000` para ver el catalogo principal.
- Login: Haga clic en el boton "Acceso Admin" en la barra de navegacion superior o ingrese a `http://localhost:3000/login`.
- Panel de Administracion: Tras iniciar sesion exitosamente, sera redirigido a `/admin` donde podra crear, editar y eliminar las reseñas de los videojuegos mediante el formulario superior y la tabla inferior.

## 8. Estructura del Proyecto
- `/config/db.js`: Contiene la configuracion y conexion a la base de datos MySQL.
- `/controllers/`: Aloja la logica de negocio (authController para login y juegosController para el CRUD).
- `/model/Juego.js`: Define la clase y estructura de los datos de un videojuego.
- `/public/`: Contiene los archivos estaticos expuestos al cliente (scripts JS del frontend).
- `/views/`: Almacena los archivos HTML de las vistas (index, login, admin).
- `server.js`: Archivo principal que levanta el servidor Express y define las rutas.
