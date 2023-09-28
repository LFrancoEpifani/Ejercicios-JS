const texto = (cadena) => {
    const remplazo = cadena.replace(/a/g, 'o');
    return remplazo;
  }
  
  const resultado = texto("Habracadabra");
  console.log(resultado);


  const buscador = (palabra) => {
        const busqueda = palabra.startsWith('aca');
        return busqueda;
  }

  console.log(buscador("academia"));
  console.log(buscador("escuela"));


  const saludar = () =>{
    const saludo = "Hola"
    return saludo.repeat(3);
  }


  console.log(saludar());