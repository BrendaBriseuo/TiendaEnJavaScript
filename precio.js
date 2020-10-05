
(function (){

var 
precio = 5,
cantidad=8,
total=precio*cantidad;

var pPrecio = document.getElementById('precio');
var pCantidad = document.getElementById('cantidad');
var pTotal = document.getElementById('total');



pPrecio.textContent=precio;
pCantidad.textContent=cantidad;
pTotal.textContent=total;

}())
