var lista = ["Alura", "Oracle", "Computadora", "Escritorio", "Mouse", "Teclado"];

function aleatorio(n){

    return (Math.floor((Math.random()*n)))

}


function elegirPalabra(lista) {

    return lista[aleatorio(lista.length)];

}

function cambiarAGuiones(palabra){

    var nuevo = palabra.split(palabra);
    console.log(nuevo)
    return nuevo;
}

function crearElementoGuion(){

    //CREAMOS <P>
    const nuevoP = document.createElement("p");
    const contenido = document.createTextNode("_");
    nuevoP.appendChild(contenido);
    nuevoP.className = "guion-actual";
    //CONECTAMOS P
    const pActual = document.querySelector("#palabra-ahorcado");
    pActual.insertAdjacentElement("afterbegin", nuevoP);
    console.log("Elemento creado: ", nuevoP);
}

function crearElemento(palabra){

    //CREAMOS <P>
    const nuevoP = document.createElement("p");
    const contenido = document.createTextNode(palabra);
    nuevoP.appendChild(contenido);
    nuevoP.className = "letra-actual";
    console.log(nuevoP);
    //CONECTAMOS P
    const pActual = document.querySelector("#palabra-ahorcado");
    pActual.insertAdjacentElement("beforeend", nuevoP);
}

function crearPalabraOculta (palabra) {

    
    for (i=0; i<palabra.length; i++){

        crearElementoGuion();
        
    }


}

function eliminarPalabraOculta (){

    var pActuales = document.querySelectorAll(".guion-actual");
   
    for (i=0; i<pActuales.length; i++){

        pActuales[i].remove();
        
    }
   
    console.log(pActuales);
}



function validarEntrada(letra){

    if((letra > 64) && (letra < 91) && (letra != 20)){

  

        return true;

    }
    else {

 
        return false;

    }

}

function cambiarLetra(palabra,letra){

    
    console.log(palabra);

    var letras = document.querySelectorAll(".guion-actual");
    

    console.log(letras);

    for (i=0; i<palabra.length; i++){

        if(palabra[i] == letra){

            letras[i].textContent = letra.toUpperCase();


        }


    }


    }


    
    
    var aux = 0 ;
    var palabraActual = "Oracle";
    var botonSiguiente = document.querySelector("#boton-siguiente");
    botonSiguiente.addEventListener("click", function(){

        aux = aux + 1;
        console.log(aux);
        
        botonSiguiente.innerHTML = "Siguiente palabra";

        palabraActual = elegirPalabra(lista);
        palabraActual = palabraActual.toLowerCase();
        eliminarPalabraOculta();
        crearPalabraOculta(palabraActual);
       
        var evento = document.querySelector("html");
        evento.addEventListener("keyup",  function(evento) {
                
                
                
            })
        
        
    });

var contador = document.querySelector("html");
    contador.addEventListener("keyup", function(evento){

        console.log("EVENTO POR AFUERA A VER GASTON - >  " + aux);
        console.log("Palabra: " + palabraActual);
        var letraPresionada = evento.key.toLowerCase();

                if(validarEntrada(evento.keyCode)){

                    console.log("Valido");
                    
                    cambiarLetra(palabraActual,letraPresionada);
                    

                }

    })                                                              //LA VARIABLE QUEDA GUARDADA PQ ES GLOBAL
   
