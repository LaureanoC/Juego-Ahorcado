var lista = ["alura", "oracle", "computadora"];

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



function validarEntrada(letra){

    if((letra > 64) && (letra < 91) && (letra != 20)){

        console.log("Es admitida!");

        return true;

    }
    else {

        console.log("No entro!");
        return false;

    }

}

function cambiarLetra(palabra,letra){

    letra = letra.toLowerCase();
    var letras = document.querySelectorAll(".palabra-actual");
    
        console.log(letras[0].textContent); // Asi accedo al HTML

    
        for (i=0; i<palabra.length; i++){

            if (palabra[i] == letra){
                console.log("ENTRE EN EL IF");
                letras[i].textContent = letra;
            }
           

        }
    
    
    }


console.log(elegirPalabra(lista));
var botonSiguiente = document.querySelector("#boton-siguiente");
botonSiguiente.addEventListener("click", function(){

    botonSiguiente.innerHTML = "Siguiente";
    var palabraActual = elegirPalabra(lista);
    eliminarPalabraOculta();
    crearPalabraOculta(palabraActual);

    //Sector de adivinar Letras

    console.log(palabraActual);

    var evento = document.querySelector("html");
        evento.addEventListener("keyup", function(evento) {

            if(validarEntrada(evento.keyCode)){

                cambiarLetra(palabraActual, evento.key);

            }
           
            
            

    })
  
});



