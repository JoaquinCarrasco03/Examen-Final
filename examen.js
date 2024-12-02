document.write("<h1>Ejercicio 01</h1>");
document.write("<br>");
var nombre = prompt("Ingresa tu nombre");
document.write("Bienvenido a JavaScript: " + nombre);
document.write("<br>");
document.write("<h1>Ejercicio 02</h1>");
document.write("<br>");
var num = parseInt(prompt("Ingresa un numero"));
if (num >= 0) {
  document.write("El numero entegrado es: " + num);
  document.write("<br>");
  document.write("El numero es positivo");
} else {
  document.write("El numero entegrado es: " + num);
  document.write("<br>");
  document.write("El numero es negativo");
}
document.write("<h1>Ejercicio 03</h1>");
document.write("<br>");
var prod = prompt("Ingresa el nombre del vendedor");
var sueldo = parseFloat(prompt("Ingresa el sueldo"));
var cant = parseInt(prompt("Ingresa la cantidad de autos vendidos"));
var total = 500 * cant;
document.write("El vendedor es: " + prod);
document.write("<br>");
document.write("El sueldo a pagar es: " + sueldo);
document.write("<br>");
document.write("La cantidad de autos vendidos es: " + cant);
document.write("<br>");
document.write("El total a pagar es: " + total);
document.write("<br>");
document.write(
  "<marquee><h2>Hecho por Joaquin Carrasco Duffaut</h2></marquee>"
);
