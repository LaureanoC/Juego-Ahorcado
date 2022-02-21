var lista = ["Alura", "Oracle", "Computadora", "Escritorio", "Mouse", "Teclado", "Botellla", "Videojuego", "Sombrilla", "Tomate", "Pera", "Manzana",
             "Zapallo", "Lechuga", "Pelicula", "Caja", "Perro", "Gato", "Costeleta", "Ciudad", "Pueblo", "Dinosaurio", "Tigre","Mono"

];

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

function comprobarListaRechazadas(letra){
 
  

}


function comprobarAceptadasYRechazadas(letra){

   existencia = false;    
   for(i=0; i<palabraActual.length ;i++){

    console.log(palabraActual[i] + " + letra: " + letra);
    if(palabraActual[i]==letra){
        existencia = true;
        break;     
    }  
   }

   console.log(existencia);
}

function agregarLetraIngresada (letra){

    const letras = document.querySelectorAll(".guion-actual");
        existencia = false;            
    for (i=0; i<letras.length; i++){

        if (letra == palabraActual[i]){
            letras[i].textContent = letra;
            existencia = true;
        }
    }

    if (existencia == false){

        console.log("letrasrechazads length: " + letrasRechazada.length);

        for(i=0; i<letrasRechazada.length; i++){

            if(letrasRechazada[i] == letra){

                existencia = true;
                console.log("Existe la letra en la lista de rechazos");
                break;
            }

        }

        if(existencia == false){

            console.log("No existe ne la lista de rechazos");
            letrasRechazada.push(letra);
            console.log(letrasRechazada);

        }
        
    }
    
}




    
    
   
    var palabraActual = "Oracle";
    var letrasRechazada = [];
    var jugando = false;



    var botonSiguiente = document.querySelector("#boton-siguiente");
    botonSiguiente.addEventListener("click", function(){

          
        botonSiguiente.innerHTML = "Siguiente palabra";

        palabraActual = elegirPalabra(lista);
        palabraActual = palabraActual.toLowerCase();
        eliminarPalabraOculta();
        crearPalabraOculta(palabraActual);
        jugando = true;
           
    });

    var contador = document.querySelector("html");
    contador.addEventListener("keyup", function(evento){

        if(jugando){

            console.log("Palabra: " + palabraActual);                            //LA VARIABLE QUEDA GUARDADA PQ ES GLOBAL
            var letraPresionada = evento.key.toLowerCase();     
    
                    if(validarEntrada(evento.keyCode)){
                        
                        agregarLetraIngresada(letraPresionada);
    
                    }
        }
        
                

    })                                                             
   
