// Ejercicio 1

const suma = (n1, n2, n3) =>{
    return n1 + n2 + n3;
}
    console.log(suma(1,2,3));


// Ejercicio 2

const completo = (nombre, apellido1, apellido2) => {
    return "Tu nombre completo es: " + nombre + apellido1 + apellido2
}

console.log(completo("Luciano ", "Epifani ", "Caffarone"));


// Ejercicio 3

const mayor = (n1, n2) =>{
    if (n1 < n2) {
        return "El número mayor es: " + n2;
    }else{
        return "El número mayor es: " + n1;
    }
}

console.log(mayor(12, 9))