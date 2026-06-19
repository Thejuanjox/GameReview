const form = document.getElementById('login-form');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
        const respuesta = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        
        const data = await respuesta.json();

        if (data.success) {
            window.location.href = '/admin';
        } else {
            errorMsg.textContent = data.message;
            errorMsg.classList.remove('d-none');
        }
    } catch (error) {
        errorMsg.textContent = 'Error de conexion';
        errorMsg.classList.remove('d-none');
    }
});