const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simula el almacenamiento de datos del usuario (puedes adaptar esto según tus necesidades)
    const userData = {
        username,
        email,
        password,
    };

    // Muestra la información en la consola (puedes cambiar esto según tus necesidades)
    console.log('Usuario registrado:', userData);

    // Puedes reiniciar el formulario o redirigir a otra página después del registro
    registrationForm.reset();
});
