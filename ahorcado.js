var lista = ["Alura", "Oracle", "Computadora"];

function aleatorio(n){

    return (Math.floor((Math.random()*n)))

}

console.log(aleatorio(lista.length));

function elegirPalabra(lista) {

    return lista[aleatorio(lista.length)];

}

function cambiarAGuiones(palabra){

    var nuevo = palabra.split('');
    console.log(nuevo)
    return nuevo;
}

function crearElementoGuion(){

    //CREAMOS <P>
    const nuevoP = document.createElement("p");
    const contenido = document.createTextNode("_");
    nuevoP.appendChild(contenido);
    nuevoP.className = "palabra-actual";
    //CONECTAMOS P
    const pActual = document.querySelector("#palabra-ahorcado");
    pActual.insertAdjacentElement("afterbegin", nuevoP);
    console.log("Elemento creado: ", nuevoP);
}

function crearPalabraOculta (palabra) {

    for (i=0; i<palabra.length; i++){

        crearElementoGuion();
    }

}

function eliminarPalabraOculta (){

    var pActuales = document.querySelectorAll(".palabra-actual");
    for (i=0; i<pActuales.length; i++){

        pActuales[i].remove();
    }
   
    console.log(pActuales);
}


console.log(elegirPalabra(lista));

var botonSiguiente = document.querySelector("#boton-siguiente");
botonSiguiente.addEventListener("click", function(){

    botonSiguiente.innerHTML = "Siguiente";
    eliminarPalabraOculta();
    var palabraActual = elegirPalabra(lista);
    crearPalabraOculta(palabraActual);
    console.log(palabraActual);
  
});

