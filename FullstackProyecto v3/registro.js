document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registroForm');

    const usuario = document.getElementById('usuario');
    const correo = document.getElementById('correo');
    const contrasena = document.getElementById('contrasena');
    const confirmarContrasena = document.getElementById('confirmarContrasena');
    
    const listInput = document.querySelectorAll('.form-input');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Limpiar errores anteriores
        listInput.forEach(el => el.lastElementChild.innerHTML = "");

        let confirmacion = true;

        // Validar usuarip
        if (usuario.value.trim() === "") {
            mostrarError("usuario", "Este campo es obligatorio.");
            confirmacion = false;
        }

        // valida correo
        if (correo.value.trim() === "" || 
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo.value.trim())) {
            mostrarError("correo", "Introduce un correo válido con @.");
            confirmacion = false;
        }

        // calidar contraseña
        if (contrasena.value.trim() === "" || contrasena.value.trim().length < 3) {
            mostrarError("contrasena", "La contraseña debe tener al menos 3 caracteres.");
            confirmacion = false;
        }

        // confirma contraseña
        if (confirmarContrasena.value.trim() === "") {
            mostrarError("confirmar-contrasena", "Por favor confirma tu contraseña.");
            confirmacion = false;
        } else if (contrasena.value !== confirmarContrasena.value) {
            mostrarError("confirmar-contrasena", "Las contraseñas no coinciden.");
            confirmacion = false;
        }

        if (confirmacion) {
            alert("¡Registro exitoso!");
        }
    });

    function mostrarError(claseInput, mensaje) {
        const elemento = document.querySelector(`.${claseInput}`);
        if (elemento) {
            elemento.lastElementChild.innerHTML = mensaje;
        }
    }
});
