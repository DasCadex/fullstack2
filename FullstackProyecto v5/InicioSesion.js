//arregle el codigo en el formato if que estaba mal hecho ya que estaba puesto (!x  === "") entonces estaba haciendo lo contrario
// en vez de validar lo que se le pasaba como que lo invalidaba ahora quedo (x === ""), de nada :v
// y agregue el boton de registro mediante js, por que? pues porque encontraba mas practico 


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const inicio = document.getElementById('InicioSecion');
    const contrasena = document.getElementById('Contrasena');
    const listInput = document.querySelectorAll('.form-input');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Limpiamos los mensajes de error anteriores
        listInput.forEach(el => el.lastElementChild.innerHTML = "");

        let confirmacion = true;


        // Validamos si el campo de usuario o correo
        const correoValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (inicio.value.trim() === "") {
            mostrarError("inicio", "Este campo es obligatorio.");
            confirmacion = false;
        } else if (!correoValido.test(inicio.value.trim())) {
            mostrarError("inicio", "El formato del correo es inválido.");
            confirmacion = false;
        }

        // contraseña validar
        if (contrasena.value.trim() === "") {
            mostrarError("contrasena", "La contraseña es obligatoria.");
            confirmacion = false;
        } else if (contrasena.value.trim().length < 3) {
            mostrarError("contrasena", "La contraseña debe tener al menos 3 caracteres.");
            confirmacion = false;
        }

        if (confirmacion) {
             //si pasa la validación
            alert("Inicio de sesión exitoso");
            window.location.href = "Principal.html";
        }
    });

    function mostrarError(claseInput, mensaje) {
        const elemento = document.querySelector(`.${claseInput}`);
        if (elemento) {
            elemento.lastElementChild.innerHTML = mensaje;
             
        }
    }

    const btnRegistro = document.getElementById('btnRegistro');
  if (btnRegistro) {
    btnRegistro.addEventListener('click', function () {
      window.location.href = "registro.html"; // Redirige al registro
    });
  }
});
