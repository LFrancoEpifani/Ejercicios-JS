(function () {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn-delete');
    const equal = document.querySelector('.btn-equal');
    const calculator = document.getElementById('calc');
    
    buttons.forEach(button => {
        button.addEventListener('click', e => {
            screen.value += e.target.dataset.num;
        });
    });

    equal.addEventListener('click', () => {
        screen.value = screen.value.trim() ? eval(screen.value) : "";
    });

    clear.addEventListener('click', () => {
        screen.value = "";
    });

    const uno = document.getElementById('uno');
    const dos = document.getElementById('dos');
    const tres = document.getElementById('tres');
    
    uno.addEventListener('click', () => {
        updateCalculatorColors('#22252D', '#fff', '#000', '#000');
    });
    
    dos.addEventListener('click', () => {
        updateCalculatorColors('#5470ff', '#000', '#fff', '#000');
    });
    
    tres.addEventListener('click', () => {
        updateCalculatorColors('#eadb6b', '#000', '#000', '#fff');
    });

    function updateCalculatorColors(bgColor, unoColor, dosColor, tresColor) {
        calculator.style.backgroundColor = bgColor;
        uno.style.color = unoColor;
        dos.style.color = dosColor;
        tres.style.color = tresColor;
    }
})();
