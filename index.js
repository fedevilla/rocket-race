//Definicion de reglas del juego
const HEADREGLAS = "############################################" + "\n" +
              "Bienvenido a Rocket Race " + "\n" + 
              "############################################" + "\n" +  "\n" ;

const ORDERS = "El juego consta de tres aeronaves que deben de llegar a la luna. La primera aeronave en llegar es la ganadora." + "\n" + 
              "Maximo tres aeronaves que podran ser equipadas con maximo 5 cohetes cada uno. Cuanto mas cohetes, mas pasada " + "\n" +
              "la nava, pero mas posibilidades de llegar." +  "\n" +  "\n" ;

const FOOTER = "############################################" + "\n" +
              "PRESIONE START PARA COMENZAR";

alert(HEADREGLAS + ORDERS + FOOTER);

//definicion de variables principales
let rocketNumber;
const ROUNDCOUNT = 10;

//asignacion jugadores
rocketNumber = parseInt(prompt("Ingrese Cantidad de cochetes (cantidad maxima 3:"));

//verificacion de numero de jugadores
while(rocketNumber < 1 || rocketNumber > 3 || isNaN(rocketNumber)){
    rocketNumber = parseInt(prompt("Ingrese cantidad de cohetes (maximo 3 minimo 2):"))
}

//Comencemos
let rocketOne;
let rocketTwo;
let rocketOneResult = 0;
let rocketTwoResult = 0;
let rocketUno;
let rocketDos;
let rocketTres;
let rocketUnoResult = 0;
let rocketDosResult = 0;
let rocketTresResult = 0;
let carriles = "";
comienzo = "|     V     |      V      | " + "\n";


for (let index = 0; index < ROUNDCOUNT; index++) {
    
    switch (rocketNumber) {
        case 2:
            rocketOne = Math.random();
            rocketTwo = Math.random();
            if(rocketOne > rocketTwo){
                ++rocketOneResult;
                comienzo = "        |            |              |" + "\n";
                carriles += "       |            |              | " + "\n";
                carriles += "       |      V     |             | " + "\n";
                carriles += "       |            |              | " + "\n";
                alert(comienzo + carriles);
            }else{
                ++rocketTwoResult;
                carriles += "       |           |              | " + "\n";
                carriles += "       |           |      V      | " + "\n";
                carriles += "       |           |              | " + "\n";
                alert(comienzo + carriles);
            }
          
        break;
        case 3:
            rocketUno = Math.random();
            rocketDos = Math.random();
            rocketTres = Math.random();
            if(rocketUno > rocketDos && rocketUno > rocketDos){
                ++rocketUnoResult;
                carriles += "|      V    |             |            |" + "\n";
                carriles += "|            |             |            |" + "\n";
                carriles += "|            |             |            |" + "\n";
                alert(carriles);
            }else if(rocketDos > rocketUno && rocketDos < rocketTres){
                ++rocketDosResult;
                carriles += "|            |       V    |            |" + "\n";
                carriles += "|            |             |            |" + "\n";
                carriles += "|            |             |            |" + "\n";
                alert(carriles);
            }else{
                ++rocketTresResult;
                carriles += "|            |             |      V    |" + "\n";
                carriles += "|            |             |            |" + "\n";
                carriles += "|            |             |            |" + "\n";
                alert(carriles);
            }
           
        break;
        default:
            alert("Si ha salido este error es porque he cometido un error");
        break;
    }
    

}

//Ganador
if(rocketNumber === 2){
    if(rocketOneResult > rocketTwoResult){
        alert(`El ganador ha sido el cohete uno con un resultado de ${rocketOneResult} casilleros avanzados`);
    }else{
        alert(`El ganador ha sido el cohete dos con un resultado de ${rocketTwoResult} casilleros avanzados`);
    }
}else{
    if(rocketUnoResult > rocketDosResult && rocketUnoResult > rocketTresResult){
        alert(`El ganador ha sido el cohete uno con un resultado de ${rocketUnoResult}`);
    }else if (rocketDosResult > rocketUnoResult && rocketDosResult > rocketTresResult){
        alert(`El ganador ha sido el cohete dos con un resultado de ${rocketDosResult}`);
    }else{
        alert(`El ganador ha sido el cohete 3 con un resultado de ${rocketTresResult}`);
    }
}
