var lista = ["Alura", "Oracle", "Computadora", "Escritorio", "Mouse", "Teclado", "Botella", "Videojuego", "Sombrilla", "Tomate", "Pera", "Manzana",
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

}



function validarEntrada(letra){

    if((letra > 64) && (letra < 91) && (letra != 20)){

  

        return true;

    }
    else {

 
        return false;

    }

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

function crearElementoLetraRechazada(letra){

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

function mostrarLetrasRechazadas(){

    const mostrarLetras = document.querySelector(".letras-rechazadas");
    mostrarLetras.innerHTML = "Letras rechazadas: " + letrasRechazadas;

}

function insertarTexto(resultado){

    const texto = document.querySelector(".texto");

    if(resultado){

        texto.innerHTML = "¡Victoria!";

    }
    else{

        texto.innerHTML = "Derrota.";
    }
    

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
    
    var tablero = [];
    for (i=0; i<letras.length; i++){
        
        
        tablero = tablero.concat(letras[i].textContent);  
    }
    
    tablero = tablero.join('');
    console.log(typeof(tablero));
    console.log(tablero);

    if (tablero == palabraActual){

        insertarTexto();
        audioVictoria.play();
        insertarTexto(true);
        jugando = false;
    }

    

    if (existencia == false){

       
        

        for(i=0; i<letrasRechazadas.length; i++){

            if(letrasRechazadas[i] == letra){

                existencia = true;
                console.log("Existe la letra en la lista de rechazos");
                break;
            }

        }

        if(existencia == false){

            console.log("No existe ne la lista de rechazos");
            errores = errores + 1;
            if(errores !=6){
                audioError.play();
            }
           

            if(errores == 1){

                dibujarCabeza();
                
            }
            if(errores == 2){

                dibujarTorso();
            }
            if(errores == 3){

                dibujarBrazoIzq();
            }
            if(errores == 4){

                dibujarBrazoDer();
            }
            if(errores == 5){

                dibujarPiernaIzq();
            }
            if(errores == 6){

                dibujarPiernaDer();
                jugando = false;
                insertarTexto(false);
                audioDerrota.play();
                
            }

            console.log("Numero de errores: " +errores);
            letrasRechazadas.push(letra);
            console.log(letrasRechazadas);
            mostrarLetrasRechazadas();
            
        }
        
    }
    
}

function eliminarResultado(){

    const resultado = document.querySelector(".texto");
    resultado.innerHTML = "";

}

function eliminarRechazadas(){

    letrasRechazadas.length = 0;
    const mostrarLetras = document.querySelector(".letras-rechazadas");
    mostrarLetras.innerHTML = "Letras rechazadas: " + letrasRechazadas;

}

 
    const audioError = new Audio ('audio/sonidoError.mp3');
    const audioDerrota = new Audio ('audio/derrota.mp3');
    const audioVictoria = new Audio ('audio/victoria.mp3');
    var acertadas = 0;
    var palabraActual = "Oracle";
    var letrasRechazadas = [];
    var jugando = false;
    var errores = 0;        //Sino el evento de tecla se puede hacer antes.

    var botonSiguiente = document.querySelector("#boton-siguiente");
    botonSiguiente.addEventListener("click", function(){

          
        botonSiguiente.innerHTML = "Siguiente palabra";

        //Reinicio --

        errores = 0;
        acertadas = 0;
        letrasRechazadas=[];
        limpiarPantalla();
        dibujarHorca();
        eliminarPalabraOculta();
        eliminarRechazadas();
        eliminarResultado();

        // ---


        palabraActual = elegirPalabra(lista);
        palabraActual = palabraActual.toLowerCase();
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
   
