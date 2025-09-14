document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const inicio = document.getElementById('InicioSecion');
    const contrasena= document.getElementById('Contrasena');
    const listInput = document.querySelectorAll('.form-input'); 

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        //limpiar mensajes previos
        listInput.forEach(el => el.lastElementChild.innerHTML = "");

        let confirmacion=true;

        if(!inicio.value.trim()===""||  !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inicio.value.trim())){
            mostrarError("inicio","Error este campo es obligatorio es obligatorio el formato @" )

            confirmacion=false;

        }
        if(!contrasena.value.trim()===""|| contrasena.value.length < 3){

            mostrarError("contrasena", "la contrasela tiene que tener minimo 3 carateres ");
            confirmacion=false;

        }




    });
    function mostrarError(claseInput, mensaje) {
        let elemento = document.querySelector(`.${claseInput}`);
        elemento.lastElementChild.innerHTML = mensaje;
    }


})