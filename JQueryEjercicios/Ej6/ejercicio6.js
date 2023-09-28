$(document).ready(function() {
    
    let porcentajeVida = 0;
    
    function actualizarPorcentajeFood() {
        $('#porcentaje-food').css('width', porcentajeVida + '%');
        $('.hp-food span').text(porcentajeVida + '%');
    }
    
    $('.food-btn').click(function() {
      
        porcentajeVida += 10;
        

        if (porcentajeVida > 100) {
            porcentajeVida = 100;
        }
        
    
        actualizarPorcentajeFood();
    });
    
    function actualizarPorcentajeFun() {
        $('#porcentaje-fun').css('width', porcentajeVida + '%');
        $('.hp-fun span').text(porcentajeVida + '%');
    }
    

    $('.fun-btn').click(function() {
      
        porcentajeVida += 10;
        

        if (porcentajeVida > 100) {
            porcentajeVida = 100;
        }
        
    
        actualizarPorcentajeFun();
    });


    function actualizarPorcentajeFight() {
        $('#porcentaje-fight').css('width', porcentajeVida + '%');
        $('.hp-fight span').text(porcentajeVida + '%');
    }
    

    $('.fight-btn').click(function() {
      
        porcentajeVida += 10;
        

        if (porcentajeVida > 100) {
            porcentajeVida = 100;
        }
        
    
        actualizarPorcentajeFight();
    });


    function actualizarPorcentajeSleep() {
        $('#porcentaje-sleep').css('width', porcentajeVida + '%');
        $('.hp-sleep span').text(porcentajeVida + '%');
    }
    

    $('.sleep-btn').click(function() {
      
        porcentajeVida += 10;
        

        if (porcentajeVida > 100) {
            porcentajeVida = 100;
        }
        
    
        actualizarPorcentajeSleep();
    });


    let porcentajeFood = 0;
    let porcentajeFun = 0;
    let porcentajeFight = 0;
    let porcentajeSleep = 0;

    // Función para actualizar la barra de progreso y el número indicador
    function actualizarElemento(elementId, porcentaje) {
        $(elementId).css('width', porcentaje + '%');
        $(elementId + ' span').text(porcentaje + '%');
    }

    // Función para disminuir el porcentaje en 10% y actualizar
    function disminuirPorcentaje(elementId) {
        const porcentajeActual = parseInt($(elementId).css('width'));
        if (porcentajeActual >= 10) {
            porcentajeActual -= 10;
        } else {
            porcentajeActual = 0;
        }
        actualizarElemento(elementId, porcentajeActual);
    }

    // Función para disminuir aleatoriamente el porcentaje de uno de los elementos
    function disminuirPorcentajeAleatorio() {
        const elementos = ['#porcentaje-food', '#porcentaje-fun', '#porcentaje-fight', '#porcentaje-sleep'];
        const elementoAleatorio = elementos[Math.floor(Math.random() * elementos.length)];
        disminuirPorcentaje(elementoAleatorio);
    }

    // Función para realizar la disminución aleatoria cada 30 segundos
    function disminuirPeriodicamente() {
        setInterval(function() {
            // Verificar si algún porcentaje es mayor que 0 antes de disminuir
            const porcentajes = [porcentajeFood, porcentajeFun, porcentajeFight, porcentajeSleep];
            const porcentajeMayorQueCero = porcentajes.some(porcentaje => porcentaje > 0);
            if (porcentajeMayorQueCero) {
                disminuirPorcentajeAleatorio();
            }
        }, 30000); // 30 segundos
    }

    // Asociar clics a botones y actualizar los elementos correspondientes
    $('.food-btn').click(function() {
        porcentajeFood += 10;
        if (porcentajeFood > 100) {
            porcentajeFood = 100;
        }
        actualizarElemento('#porcentaje-food', porcentajeFood);
    });

    $('.fun-btn').click(function() {
        porcentajeFun += 10;
        if (porcentajeFun > 100) {
            porcentajeFun = 100;
        }
        actualizarElemento('#porcentaje-fun', porcentajeFun);
    });

    $('.fight-btn').click(function() {
        porcentajeFight += 10;
        if (porcentajeFight > 100) {
            porcentajeFight = 100;
        }
        actualizarElemento('#porcentaje-fight', porcentajeFight);
    });

    $('.sleep-btn').click(function() {
        porcentajeSleep += 10;
        if (porcentajeSleep > 100) {
            porcentajeSleep = 100;
        }
        actualizarElemento('#porcentaje-sleep', porcentajeSleep);
    });

    // Iniciar la disminución periódica
    disminuirPeriodicamente();




});






