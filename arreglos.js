
var articulos = new Array("Audifonos","Cargador","Accesorios"); 
var articulos1= new Array("Fundas","Micas","Cables"); 

//length: numero de elementos del array
articulos.length;
console.log(articulos);
//push: agrega elementos al final del array
articulos.push("Celulares");
console.log(articulos);
///unshift: agregar elementos al inicio del array
articulos.unshift("Audifonos bluethoot");
console.log(articulos);

/* //pop:sacar un elemento del final
articulos.pop();

const eliminado =articulos.pop();
console.log('Eliminado:',eliminado)
console.log(articulos);


//shift:sacar un elemento del inicio
articulos.shift();

const eliminadoshift =articulos.shift();
console.log('Eliminado:',eliminadoshift)
console.log(articulos); */


/* //sort:ordenar
articulos.sort();
console.log(articulos);

//reverse: ponerlo en reversa
articulos.reverse();
console.log(articulos);  */


/* //slice:copiar una porcion del arreglo
articulos.slice(1,3);
console.log(articulos); */

/* //splice Agregar, reemplazar y eliminar elementos. 
articulos.splice(0,2);
console.log(articulos); */

//concat: union o enlazar dos o mas arrays o strings
var union=articulos.concat(articulos1);
console.log("Esta es la union:",union);










