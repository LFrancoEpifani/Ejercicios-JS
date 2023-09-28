
// EJERCICIO 1

const yo = (nombre, apellido) =>{
    return nombre + apellido;
}

const nombre = "Luciano";
const apellido = "Epifani"
console.log(nombre, apellido);

// EJERCICIO 2

function valorBooleano (valor){
    console.log("El valor booleano es: " + valor)
}

const miBooleano = false;
valorBooleano(miBooleano)

// EJERCICIO 3

const numbers = (...valores) =>{
    valores.forEach(element =>{
        console.log(element)
    }) 
}

numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


