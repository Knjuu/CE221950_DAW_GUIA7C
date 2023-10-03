function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validar el campo de nombre
    var nombreValido = /^[A-Za-z\s]+$/.test(nombre);

    // Validar que el campo de nombre no contenga números
    var contieneNumeros = /\d/.test(nombre);

    // Validar el campo de correo electrónico
    var emailValido = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email);

    // Mostrar mensajes de error si los campos no son válidos
    if (!nombreValido) {
        alert("Por favor, ingrese un nombre válido (solo caracteres alfabéticos).");
        return false;
    }

    if (contieneNumeros) {
        alert("El campo de nombre no debe contener números.");
        return false;
    }

    if (!emailValido) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return false;
    }

    // El campo de mensaje no necesita validación específica

    return true;
}
