
(function (){

var 
precio = 650,
cantidad=2,
total=precio*cantidad;

var pPrecio = document.getElementById('precio');
var pCantidad = document.getElementById('cantidad');
var pTotal = document.getElementById('total');



pPrecio.textContent=precio;
pCantidad.textContent=cantidad;
pTotal.textContent=total;

}())
