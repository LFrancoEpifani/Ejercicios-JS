
  // Variables para controlar la salud de las actividades
  let foodHealth = 100;
  let funHealth = 100;
  let sleepHealth = 100;
  let fightHealth = 100;
  let dinoHealth = 100;

  // Función para reducir gradualmente la salud con el tiempo
  function reducirSalud() {
    setInterval(() => {
      if (foodHealth > 0) {
        foodHealth -= 2;
        if (foodHealth < 0) foodHealth = 0; // Asegurarse de que no sea negativo
        actualizarBarra('food-hp-up', foodHealth, 'porcentaje-food');
      }
      if (funHealth > 0) {
        funHealth -= 1;
        if (funHealth < 0) funHealth = 0; // Asegurarse de que no sea negativo
        actualizarBarra('fun-hp-up', funHealth, 'pocentaje-fun');
      }
      if (sleepHealth > 0) {
        sleepHealth -= 1.5;
        if (sleepHealth < 0) sleepHealth = 0; // Asegurarse de que no sea negativo
        actualizarBarra('sleep-hp-up', sleepHealth, 'porcentaje-sleep');
      }
      if (fightHealth > 0) {
        fightHealth -= 1.5;
        if (fightHealth < 0) fightHealth = 0; // Asegurarse de que no sea negativo
        actualizarBarra('fight-hp-up', fightHealth, 'porcentaje-fight');
      }
      // Actualizar la salud del dino basada en la salud de las actividades
      dinoHealth = (foodHealth + funHealth + sleepHealth + fightHealth) / 4;
      actualizarBarra('dino-hp-up', dinoHealth, 'porcentaje-dino');
    }, 1000); // Reducir la salud cada segundo
  }

  // Función para aumentar la salud al tocar los botones de actividades
  function aumentarSalud(activity) {
    if (activity === 'food') {
      if (foodHealth < 100) {
        foodHealth += 5;
        if (foodHealth > 100) foodHealth = 100; // Asegurarse de que no supere 100
        actualizarBarra('food-hp-up', foodHealth, 'porcentaje-food');
      }
    } else if (activity === 'fun') {
      if (funHealth < 100) {
        funHealth += 5;
        if (funHealth > 100) funHealth = 100; // Asegurarse de que no supere 100
        actualizarBarra('fun-hp-up', funHealth, 'pocentaje-fun');
      }
    } else if (activity === 'sleep') {
      if (sleepHealth < 100) {
        sleepHealth += 5;
        if (sleepHealth > 100) sleepHealth = 100; // Asegurarse de que no supere 100
        actualizarBarra('sleep-hp-up', sleepHealth, 'porcentaje-sleep');
      }
    } else if (activity === 'fight') {
      if (fightHealth < 100) {
        fightHealth += 5;
        if (fightHealth > 100) fightHealth = 100; // Asegurarse de que no supere 100
        actualizarBarra('fight-hp-up', fightHealth, 'porcentaje-fight');
      }
    }
    // Actualizar la salud del dino basada en la salud de las actividades
    dinoHealth = 100 / 4;
    actualizarBarra('dino-hp-up', dinoHealth, 'porcentaje-dino');
  }

  // Función para actualizar la barra de salud y el porcentaje en la pantalla
  function actualizarBarra(barId, salud, porcentajeId) {
    const bar = document.getElementById(barId);
    const porcentaje = document.getElementById(porcentajeId);
    bar.style.width = `${salud}%`;
    porcentaje.textContent = `${Math.round(salud)}%`;
  }

  // Iniciar la reducción gradual de la salud
  reducirSalud();

  // Agregar manejadores de eventos a los botones de actividades
  document.getElementById('food-btn-1').addEventListener('click', () => aumentarSalud('food'));
  document.getElementById('food-btn-2').addEventListener('click', () => aumentarSalud('food'));
  document.getElementById('food-btn-3').addEventListener('click', () => aumentarSalud('food'));

  document.getElementById('fun-btn-1').addEventListener('click', () => aumentarSalud('fun'));
  document.getElementById('fun-btn-2').addEventListener('click', () => aumentarSalud('fun'));
  document.getElementById('fun-btn-3').addEventListener('click', () => aumentarSalud('fun'));

  document.getElementById('sleep-btn-1').addEventListener('click', () => aumentarSalud('sleep'));
  document.getElementById('sleep-btn-2').addEventListener('click', () => aumentarSalud('sleep'));

  document.getElementById('fight-btn-1').addEventListener('click', () => aumentarSalud('fight'));
  document.getElementById('fight-btn-2').addEventListener('click', () => aumentarSalud('fight'));

