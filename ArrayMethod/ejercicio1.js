const first = ["🍕","🍔","🌯","🌮","🍜","🥓","🥖","🥞"];

console.log(first.fill("🍺", 4, 8));

const second = ["🍕","🍕","🍍","🍕","🍕",];

console.log(second.includes("🍍"));

const third = ["🍕","🍕","🍍","🍕","🍕",];

console.log(third.indexOf("🍍"))
third.splice(2,1)
console.log(third)

const four = ["🍓","🍋","🍓","🍓","🍋",]

const reemplazo = four.map (fruta => {
    if (fruta == "🍋") {
        return "🍄"
    }else
        return fruta
})

console.log(reemplazo);


const five = ["🌶️","🥛","🌶️","🥛","🌶️",]
const five2 = five.map((item) => (item === "🌶️" ? `${item} 🥵` : item));

console.log(five2)


const seis = ["🎴", "🎴", "🎴","🃏", "🎴", "🎴", "🎴"];

// Función para insertar un Joker entre dos cartas rojas
function insertarJokerEnMedio(array) {
  const resultado = [];
  let contadorCartasRojas = 0;

  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i]); // Copia la carta actual al resultado

    // Verifica si la carta actual es roja y si ya se han insertado dos cartas rojas
    if (array[i] === "🎴" && contadorCartasRojas < 2) {
      resultado.push("🃏"); // Inserta un Joker después de la carta roja
      contadorCartasRojas++;
    }
  }
  return resultado;
}

const resultado = insertarJokerEnMedio(seis);
console.log(resultado);

