console.log("V60");
console.log("Kyoto drip");
console.log("Siphon");
console.log("Prensa francesa");

//lista de metodos, se llaman arrays
const metodos = ["V60", "Kyoto drip", "Siphon", "Prensa francesa"];

//instruccion que recorre la lista y que hace algo con cada elemento

for (const metodo of metodos) {
    console.log(metodo);
}

console.log("Fin del Programa")

//ejemplo de bucle de reservas en un dia

const reservasDelDia=[2,1,2,1,2];
let totalTazas=0;

for (const cantidad of reservasDelDia) {
    totalTazas=totalTazas + cantidad;
}

console.log(totalTazas)
