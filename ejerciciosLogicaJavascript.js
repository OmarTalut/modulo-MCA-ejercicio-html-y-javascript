let numeros= [10, 25, 3, 99, 42];
let mayor= numeros [0]
for (let i= 0; i < numeros.length; i++){
    if (numeros[i]> mayor){
        mayor=numeros[i];
    }
}
console.log ( mayor);

let valores= [10,55,73,42,91,18];
let mayor50= 0;
for (let i=0; i< valores.length; i++){
    if (valores[i]> 50){
        mayor50++;
    }
}
console.log (mayor50);

let multiplo= 0;
let termina= 0;
let sumaPar= 0;

//ejercicios de clase 16 de octubre
function añoSeguro(año){
    if (año% 4!== 0){
        return false;
    }
    if (año% 100===0 && año% 400!==0){
        return false;
    }
   let par= año.toString();
   let suma=0;
   for (let i=0; i<par.length; i++){
    suma+= Number(par[i]);
   }
   if (suma% 2!==0){
    return false;
   }
   return true;
}
for (let i= 1900; i<= 2025; i++){
    if (añoSeguro (i)){
        console.log (i);
    }
}

let letras= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function desifrarCodigo(codigo){
    let palabra= "";
    for (let i=0; i<codigo.length; i++){
        let numero= codigo[i];
        let letra= letras[numero-1];
        palabra+= letra;
         }
         return palabra;
}
console.log (desifrarCodigo([8, 5, 12, 12, 15]), desifrarCodigo([8, 5, 12, 12, 15]));
function mensaje(codigo1, codigo2){
    let palabra1= desifrarCodigo (codigo1);
    let palabra2= desifrarCodigo (codigo2);
    console.log (`${palabra1} ${palabra2}`);
}
mensaje ([8,5,12,12,15], [13,21,14,4,15]);

const inventario= [
    {nombre: "espada de luz", tipo: "arma", poder: 90},
    {nombre: "escudo del alba", tipo: "defensa", poder: 70},
    {nombre: "pocion curativa", tipo: "consumible", poder: 25},
    {nombre: "arco del viento", tipo: "arma", poder: 60},
    {nombre: "elixir del caos", tipo: "consumible", poder: 100}
];
function filtrarTipo (tipo){
    return inventario.filter (item=> item.tipo=== tipo);
}
console.log (filtrarTipo ("arma"));
function objetoPoderoso (){
    return inventario.reduce ((mayor, poderoso) => {
        if ( mayor.poder> poderoso.poder){
            return mayor;
        }
        else {
            return poderoso;
        }
    })
}
console.log (objetoPoderoso());
function poderPromedio (tipo){
    let objetosFiltrados= filtrarTipo (tipo);
    let sumaPoder= objetosFiltrados.reduce((suma, objeto)=> {
        return suma + objeto.poder;
    }, 0);
    let promedio= sumaPoder/ objetosFiltrados.length;
    return promedio;
}
console.log ( poderPromedio("defensa"));
console.log ( poderPromedio("arma"));
console.log ( poderPromedio("consumible"));