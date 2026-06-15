function calcularPrecio(preciounitario,cantidad){
    const total = preciounitario*cantidad,
    return total;
}
console.log(calcularPrecio(5,2));
console.log(calcularPrecio(3,4));
console.log(calcularPrecio(7,1));

// una funcion que decide

function puedeReservar(cantidad){
    if (cantidad<=2){
        return true;
    }else{
        return false;
    }
}
if (puedeReservar(3)){
    console.log("Reserva confirmada");
}else{
    console.log("Lo siento, maximas 2 tazas por persona");
}

