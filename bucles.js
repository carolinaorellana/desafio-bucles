//escribe un código que haga que console.log imprima todos los valores impares del 1 al 20.
for (var i=0; i<=20; i++){
    if (i%2!=0){
        console.log(i);
    }
}
console.log("El Primer blucle ha terminado");

// Escribe un código que haga que console.logimprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.
for (var j=100; j>=0; j--){
    if (j%3==0){
        console.log(j);
    }
}
console.log("El Segundo blucle ha terminado");

//Escribe un código que haga que console.log imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5. (disminuye en 1.5)
for (var k=4; k>-4; k-=1.5){
    console.log(k);
}
console.log("El Tercer blucle ha terminado");

/*Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final,
console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.*/
var sum=0
for (var l=1; l<=100; l++){
    sum = sum+l;
}
console.log(sum);
console.log("El Cuarto blucle ha terminado");

/*Escribe código que multiplique todos los valores del 1 al 12 en una variable producty, 
al final, console.log dé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. Deberíamos obtener  479001600al final */
var producto=1
for (var m=1; m<=12; m++){
    producto = producto*m;
}
console.log(producto);
console.log("El Quinto blucle ha terminado");

/*Todos los bucles los hice con "for", siento que me quedo más cómoda con su sintaxis.
Sin embargo, haré el intento de hacer alguno con "while"*/

/* Quinto bucle con while*/
var productoWhile =1
var n = 1;
while(n<=12) {
    productoWhile = productoWhile*n;
    n++;
}
console.log(productoWhile);
console.log("El Quinto blucle con WHILE ha terminado");