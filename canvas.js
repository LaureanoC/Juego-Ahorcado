var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.strokeStyle = "#EAF2F8";
pincel.fillStyle = "#EAF2F8";
pincel.lineWidth= 10;

function dibujarCabeza(){

    
    pincel.beginPath();
    pincel.arc(305,110,40,0,2*Math.PI); //305,110,40
    pincel.fill();

}



function dibujarHorca(){

    pincel.beginPath();
    pincel.fillRect(100,20,200,10);

    pincel.beginPath();
    pincel.fillRect(300,20,10,100);

    pincel.beginPath();
    pincel.fillRect(100,20,10,370);

    pincel.fillRect(0,370,1920,10);

}


function dibujarTorso(){
    pincel.beginPath();
    pincel.fillRect(300,160,10,100);
}

function dibujarBrazoIzq(){

   
    pincel.beginPath();
    
    pincel.moveTo(300,160);
    pincel.lineTo(270,230);
    pincel.stroke();

}

function dibujarBrazoDer(){

    pincel.beginPath();
    
    pincel.moveTo(310,160);
    pincel.lineTo(340,230);
    pincel.stroke();

}

function dibujarPiernaIzq(){

    pincel.beginPath();
    pincel.moveTo(305,260);
    pincel.lineTo(350,300);
    pincel.stroke();

}

function dibujarPiernaDer(){

    pincel.beginPath();
    pincel.moveTo(302.6,255);
    pincel.lineTo(350,300);
    pincel.stroke();

}

function dibujarPiernaIzq(){

    pincel.beginPath();
    pincel.moveTo(304.6,255);
    pincel.lineTo(260,300);
    pincel.stroke();

}

function limpiarPantalla(){

    pincel.clearRect(0,0,600,400);

}

dibujarCabeza();
dibujarPiernaDer();
dibujarPiernaIzq();
dibujarBrazoDer();
dibujarBrazoIzq();
dibujarHorca();
dibujarTorso();
