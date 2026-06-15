//datos de la condicion
const cupoCata=8;
const inscritos=5;

//condicionale de carta abierta o llena
//si el numero de cupos es mayor que el numero de inscritos devuelve "Hay cupos, abrir reserva",
//si no devuelve "Cata llena, ofrecer lista de espera"

if(cupoCata>inscritos)
{console.log("hay cupos, abrir reserva");}
else {console.log("cata llena, ofrecer lista de espera");}


//ejercicio de clase

const tazasReservadasHoy=47;
const maxTazasDia=50;

if (tazasReservadasHoy>=maxTazasDia){
    console.log("Cerrar reservas del dia");
}else {
    console.log("Aun hay disponibilidad");
}


//un pedazo de codigo que corre, pero esta mal

const cantidadTazas=1;

if (cantidadTazas > 2) {
    console.log("Solo puedes reservar maximo 2 tazas");
} else {
    console.log("Reserva confirmada");
}
if (cantidadTazas===0) {
    console.log("Debes seleccionar entre 1 y 2 tazas");
}


const maxTazasDia=50;
const tazasReservadasHoy=49;

const cantidadTazas=1

if (cantidadTazas<=2) {
    if (tazasReservadasHoy<48) {
        console.log ("Reserva confirmada");
    }else {
        console.log ("cupo lleno por el dia");
    }
} else {
    console.log ("Selecciona entre 1 y 2 tazas como maximo");
}

// RESULTADO AL EJERCICIO DONDE PIDEN QUE LA REGLA CUMPLA CON EL LIMITE DE TAZAS POR CLIENTE 
// PERO TAMBIEN CON EL LIMITE DE TAZAS POR DIA

const maxTazasDia=50;
const tazasReservadasHoy=49;

const cantidadTazas=1

if (cantidadTazas<=2) {
    if ((tazasReservadasHoy+cantidadTazas)<=maxTazasDia) {
        console.log ("Reserva confirmada");
    }else {
        console.log ("cupo lleno por el dia");
    }
} else {
    console.log ("Selecciona entre 1 y 2 tazas como maximo");
}

