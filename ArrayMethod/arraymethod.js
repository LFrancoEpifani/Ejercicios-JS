const array = [1, 2, 3, 4, 5];

// Método at
const atIndex = array.at(2); // Obtiene el elemento en la posición 2 del array (índice 2).
console.log("Método at:", atIndex); // Resultado: 3

// Método pop
const poppedElement = array.pop(); // Elimina el último elemento del array y lo devuelve.
console.log("Método pop:", array, poppedElement); // Resultado: [1, 2, 3, 4] 5

// Método push
array.push(6); // Agrega un nuevo elemento (6) al final del array.
console.log("Método push:", array); // Resultado: [1, 2, 3, 4, 6]

// Método fill
array.fill(0, 1, 4); // Rellena el array con el valor 0 desde la posición 1 hasta la posición 4 (sin incluir la posición 4).
console.log("Método fill:", array); // Resultado: [1, 0, 0, 0, 6]

// Método join
const joinedArray = array.join(":"); // Convierte el array en una cadena de texto donde los elementos están separados por el guión "-".
console.log("Método join:", joinedArray); // Resultado: "1-0-0-0-6"

// Método shift
const shiftedElement = array.shift(); // Elimina el primer elemento del array y lo devuelve.
console.log("Método shift:", array, shiftedElement); // Resultado: [0, 0, 0, 6] 1

// Método reverse
array.reverse(); // Invierte el orden de los elementos en el array.
console.log("Método reverse:", array); // Resultado: [6, 0, 0, 0]

// Método unshift
array.unshift(7); // Agrega un nuevo elemento (7) al inicio del array.
console.log("Método unshift:", array); // Resultado: [7, 6, 0, 0, 0]

// Método includes
const includesThree = array.includes(3); // Verifica si el array contiene el elemento 3.
console.log("Método includes:", includesThree); // Resultado: false

// Método map
const mappedArray = array.map((element) => element * 2); // Crea un nuevo array aplicando una función a cada elemento del array original.
console.log("Método map:", mappedArray); // Resultado: [14, 12, 0, 0, 0]

// Método find
const foundElement = array.find((element) => element > 5); // Encuentra el primer elemento que cumple una condición.
console.log("Método find:", foundElement); // Resultado: 7

// Método some
const hasPositive = array.some((element) => element > 10); // Verifica si al menos un elemento cumple una condición.
console.log("Método some:", hasPositive); // Resultado: false

// Método filter
const filteredArray = array.filter((element) => element !== 0); // Crea un nuevo array con los elementos que cumplen una condición.
console.log("Método filter:", filteredArray); // Resultado: [7, 6]

// Método every
const allPositive = array.every((element) => element > 0); // Verifica si todos los elementos cumplen una condición.
console.log("Método every:", allPositive); // Resultado: false

// Método findIndex
const indexOfSix = array.findIndex((element) => element === 6); // Encuentra el índice del primer elemento que cumple una condición.
console.log("Método findIndex:", indexOfSix); // Resultado: 1

// Método reduce
// array.reduce(callback[, initialValue]);
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Reduce el array a un solo valor aplicando una función acumulativa.
console.log("Método reduce:", sum); // Resultado: 13
