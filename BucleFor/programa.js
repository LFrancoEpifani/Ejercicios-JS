let numero = 1;
let i = 0

do {
    if(i === 0){
        i++;
        numero--;
        console.log(numero);
    }else{
        numero++;
        console.log(numero);
    }
}while (numero < 5);

// Dará 6 iteraciones
// Entrará solo una vez en el if ya i solo valdrá 0 una vez.
// Y seguirá en el else hasta que se cumpla el while.