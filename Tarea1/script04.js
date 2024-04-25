document.addEventListener('DOMContentLoaded', function () {
    const limpiarBtn = document.getElementById('limpiar');
    const passwordInput = document.getElementById('password');

    limpiarBtn.addEventListener('click', function () {
        limpiarCampoContraseña();
    });

    function limpiarCampoContraseña() {
        passwordInput.value = '';
    }

    const buttons = Array.from(document.querySelectorAll('.btn'));
    const numbers = Array.from({ length: 10 }, (_, index) => index);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(numbers);

    buttons.forEach((btn, index) => {
        if (numbers[index] !== undefined) {
            btn.innerText = numbers[index];
        }
    });

    function addClickEventToButtons() {
        buttons.forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.preventDefault(); // Prevenir la acción por defecto del botón
                const passwordInput = document.getElementById('password');
                if (passwordInput.value.length < 6) {
                    passwordInput.value += btn.innerText;
                }
            });
        });
    }

    addClickEventToButtons();

    const selector = document.getElementById("documento");
    const input = document.getElementById("numeroDocumento");

    const input1 = document.getElementById("numeroTarjeta1");
    const input2 = document.getElementById("numeroTarjeta2");
    const input3 = document.getElementById("numeroTarjeta3");
    const input4 = document.getElementById("numeroTarjeta4");

    selector.addEventListener("change", function () {
        input.value = ""; // Borra el valor del input al cambiar la opción
        if (selector.value === "DNI") {
            input.setAttribute("maxlength", "8");
        } else if (selector.value === "RUC") {
            input.setAttribute("maxlength", "12");
        }
    });

    input4.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, ''); // Elimina caracteres que no sean números
    });

    input3.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, ''); // Elimina caracteres que no sean números
    });

    input2.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, ''); // Elimina caracteres que no sean números
    });

    input1.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, ''); // Elimina caracteres que no sean números
    });

    input.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, ''); // Elimina caracteres que no sean números
    });

});



function validarEnvio() {

    const numeroDocumento = document.getElementById("numeroDocumento");
    const numeroTarjeta1 = document.getElementById("numeroTarjeta1");
    const numeroTarjeta2 = document.getElementById("numeroTarjeta2");
    const numeroTarjeta3 = document.getElementById("numeroTarjeta3");
    const numeroTarjeta4 = document.getElementById("numeroTarjeta4");
    const passwordInput = document.getElementById('password');

    const errorMensajeTexto = document.getElementById("errorMensajeTexto");
    const errorMensajeDocumento = document.getElementById("errorMensajeDocumento");
    const errorMensajeTarjeta = document.getElementById("errorMensajeTarjeta");
    const errorMensajePassword = document.getElementById("errorMensajePassword");

    let formIsValid = true;

    const imagenSrc = document.getElementById("imagen").src;
    const textoInput = document.getElementById("inputTexto").value.trim();
    if (imagenSrc.endsWith("captcha1.png") && textoInput === "smwm") {
        document.getElementById("errorMensaje").textContent = "";
        return false; // No se envía el formulario si la validación es exitosa
    } else {
        document.getElementById("errorMensaje").textContent = "La imagen o el texto ingresado no coinciden.";
        return false; // Se detiene el envío del formulario
    }

    if (inputTexto.value.trim() === "") {
        errorMensajeTexto.textContent = "Este campo es obligatorio";
        formIsValid = false;
    } else {
        errorMensajeTexto.textContent = "";
    }

    if (numeroDocumento.value.trim() === "") {
        errorMensajeDocumento.textContent = "Este campo es obligatorio";
        formIsValid = false;
    } else {
        errorMensajeDocumento.textContent = "";
    }

    if (numeroTarjeta1.value.trim() === "" || 
        numeroTarjeta2.value.trim() === "" || 
        numeroTarjeta3.value.trim() === "" || 
        numeroTarjeta4.value.trim() === "") {
        errorMensajeTarjeta.textContent = "Todos los campos de la tarjeta son obligatorios";
        formIsValid = false;
    } else {
        errorMensajeTarjeta.textContent = "";
    }

    if (passwordInput.value.trim() === "") {
        errorMensajePassword.textContent = "Este campo es obligatorio";
        formIsValid = false;
    } else {
        errorMensajePassword.textContent = "";
    }

    return formIsValid;
}
