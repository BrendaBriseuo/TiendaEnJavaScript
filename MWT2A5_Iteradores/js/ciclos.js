// ¿Que diferencias hay entre cada implementación de cada iterador?
// ¿Observaste alguna diferencia entre cada impresión? Si la respuesta anterior fue afirmativa, ¿Por qué? 

//WHILE NUMEROS ASCENDENTES Y DESCENDENTES
document.write("<h1>Numeros ascendentes<h1><br>")
var z=1;
while (z<=10) {
      document.write(z +"<br>");
  z++;
};
//WHILE NUMEROS DESCENDENTES
document.write("<h1>Numero descendentes<h1><br>")
var j=10;
while (j>=1) {
      document.write(j +"<br>");
  j--;
}

//for tabla de multiplicar 1 numero
document.write("<h1>Tabla de multiplicar de un solo numero<h1><br>")
var tabla =5;
var cantidad=10
for (var i=1; i<=cantidad;i++){
    document.write(tabla+"x"+i+"="+(tabla*i)+"<br>");
    
}

//for tablas de multiplicar
 //Utilizando Bucles anidados.

 document.write("<h1>Tablas de multiplicar<h1><br>")
 for (var numero = 1; numero <=10; numero++) {
    document.write("<h1>Tabla de multiplicar del numero " + numero+"<h1>");
     for (var numero2 = 1; numero2 <=10; numero2++) {
         document.write (numero  + " X " + numero2 + " =" + numero*numero2);
        document.write("<br>");
        }
            
}


//Recorra un arreglo de números y encuentre el número máximo y el número mínimo del arreglo
document.write("<br>Encuentre maximo y minimo de los siguientes numeros <br>");
document.write("1,10,25,58,12<br>");
var arr=[13,1,10,25,58,12];
var size=arr.length;

var maximo =arr [0];
var minimo =arr [0];

for (var i=0;i<size; i++){

    if (arr[i]>maximo){
        maximo= arr[i];
    }
    if (arr[i]<minimo){
        minimo= arr[i];
    }
}

document.write(`el maximo es:${maximo} y el minimo es:${minimo}`);




//do-while
//Pedir cinco datos de precios y mostrar el promedio de estos.
// //do-while
// //Pedir cinco datos de precios y mostrar el promedio de estos.
// var datos =0 ,prom=0.0,limite=0;
// var datosPrecios=0;
// var suma=0;
// limite= parseInt(prompt("¿Cuantos datos de precio quiere ingresar:"));
// do{
//     datosPrecios=parseInt(prompt('Ingrese los precios:'));

//         suma += datosPrecios;
//         datos++;
// }while (datos<limite)
// prom=suma/limite;
// document.write("<br> la suma total es de:",suma,"<br> y el promedio es",prom);


// document.write("<h1>Pedir datos y mostrar promedio <h1><br>")
// var suma,cant,valor,promedio;
// suma=0;
// cant=0;
// do{
//     var cant=prompt("Ingrese un precio, para finalizar escribe 0");
//     valor=prompt;
//     if(valor!=0){
//         suma=suma+valor;
//         cant++;
//     }
// }while (valor!=0);
// if(cant!=0){
//     promedio=suma/cant;
//     document.write("El promedio de los valores ingresados es:"+promedio);
// }else{
//     document.write("No se ingresaron valores");
// }
//pedir 5 datos y promedio sin bucle
// document.write("<h1>Pedir datos y mostrar promedio <h1><br>")
// var vr1 = prompt("Ingrese el primer valor");
// var vr2 = prompt("Ingrese el segundo valor");
// var vr3 = prompt("Ingrese el tercer valor");
// var vr4 = prompt("Ingrese el cuarto valor");
// var vr5 = prompt("Ingrese el quinto valor");
// var p = (parseFloat(vr1)+parseFloat(vr2)+parseFloat(vr3)+parseFloat(vr4)+parseFloat(vr5))/5;
// alert("Su promedio es: "+p)


