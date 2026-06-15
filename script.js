function calcularPrecio(preciounitario,cantidad){
    const total = preciounitario*cantidad;
    return total;
}

//function puedeReservar(cantidad) {
// return cantidad <= 2
//}

function puedeReservar(tazasDisponibles){
    return tazasDisponibles > 0;
}

//const botonReservar=document.querySelector("#boton-reservar");

//botonReservar.addEventListener("click", function() {
//    console.log("El usuario hizo click");
//})

const botonReservar=document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("click", function() {
    const tazasActuales= Number (contadorTazas.textContent);

    if (puedeReservar(tazasActuales)){
        contadorTazas.textContent=tazasActuales - 1;
    } else{
        botonReservar.textContent= "No hay cupo";
        botonReservar.Disabled = true;
    }
});