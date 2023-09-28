const opciones = {
    tijera: "tijera",
    papel: "papel",
    piedra: "piedra"
};

// Función para determinar el resultado del juego
function determinarResultado(eleccionUsuario, eleccionComputadora) {
    if (eleccionUsuario === eleccionComputadora) {
        alert("Es un empate. Ambos eligieron " + eleccionUsuario + ".");
    } else if (
        (eleccionUsuario === "tijera" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "piedra" && eleccionComputadora === "papel") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "tijera")
    ) {
        alert("¡La computadora gana! La computadora eligió " + eleccionComputadora + " y tú elegiste " + eleccionUsuario + ".");
    } else {
        alert("¡Tú ganas! Tú elegiste " + eleccionUsuario + " y la computadora eligió " + eleccionComputadora + ".");
    }

    // Habilita los botones nuevamente para permitir otra partida.
    document.getElementById("tijera-btn").disabled = false;
    document.getElementById("piedra-btn").disabled = false;
    document.getElementById("papel-btn").disabled = false;
}

// Función para que la computadora seleccione una opción aleatoria
function seleccionarOpcionComputadora() {
    const opcionesArray = Object.values(opciones); // Obtén un array con las opciones.
    const numeroAleatorio = Math.floor(Math.random() * 3); // Genera un número aleatorio de 0 a 2.
    return opcionesArray[numeroAleatorio]; // Devuelve la opción de la computadora.
}



// Función que se llama cuando el usuario hace clic en un botón
function opcionUsuario(eleccionUsuario) {
    // Aquí recibes la elección del usuario como argumento y no necesitas generarlo de nuevo.
    jugar(eleccionUsuario);
}

// Función principal del juego
function jugar(eleccionUsuario) {
    const eleccionComputadora = seleccionarOpcionComputadora(); // Obtener la elección de la computadora.
    determinarResultado(eleccionUsuario, eleccionComputadora); // Determinar el resultado y mostrarlo.
}

// En el HTML, asegúrate de que los botones llamen a la función gestionarSeleccionUsuario pasando la opción correspondiente.
