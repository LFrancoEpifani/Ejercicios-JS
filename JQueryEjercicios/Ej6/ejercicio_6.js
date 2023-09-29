/* VARIABLES */





/* FUNCIONES */


/* BOTONES */

function foodHp() {
    
}

function funHp() {
    
}

function sleepHp() {
    
}

function fightHp() {
    
}


/* LOST HP */

var funHP = document.getElementById('sleep-hp-up')
var fightHP = document.getElementById('fight-hp-up')
var foodHP = document.getElementById('food-hp-up')



function lowerHp() {
    
}


/* ALERT */


function alerta() {
    
}

/* CONTADOR */

var sleepBtn = document.getElementById('sleep-btn-1');
var sleepPorcentaje = document.getElementById('porcentaje-sleep');
var sleepHp = document.getElementById('sleep-hp-up');
var maxWidth = 400;
var animacionEnCurso = false;

function contador() {
    if (animacionEnCurso) {
        return;
    }
    animacionEnCurso = true;
    let contador = 0;
    const intervalo = setInterval(() => {
        contador += 5; 
        if (contador <= 100) {
            const newWidth = (contador / 100) * maxWidth; 
            sleepHp.style.width = newWidth + "px";
            sleepPorcentaje.innerHTML = contador + "%";
        } else {
            clearInterval(intervalo);
            animacionEnCurso = false;
        }
    }, 1000);
    setTimeout(() => {
        sleepHp.style.backgroundColor = "blue";
    }, 500);
}


