//alert('hola mundo!!');


var nombre = "francisco granados yañez";
var altura = 189;
var concatenar = nombre + " " + altura;


/*
var datos = document.getElementById("datos")
datos.innerHTML = `

  <h1>Soy la caja de datos </h1>
  <h2>Mi nombre es  ${nombre}</h2>
  <h3>mido: ${altura}</h3>
  `;

if (altura >= 190) {
  datos.innerHTML += '<h1> Eres una persona alta </h1>';
}else {
  datos.innerHTML += '<h1> Eres una persona baja</h1>';
}
for (var i = 2000; i <=2020; i++) {
  datos.innerHTML +="<h2> estamos en el año:" + i;
}
*/
/*
function MuestraMinombre(nombre, altura) {
  var datos = document.getElementById("datos")
  datos.innerHTML = `

    <h1>Soy la caja de datos </h1>
    <h2>Mi nombre es  ${nombre}</h2>
    <h3>mido: ${altura} cm</h3>
    `;
}
*/


function MuestraMinombre(nombre, altura) {
  var misDatos = `

    <h1>Soy la caja de datos </h1>
    <h2>Mi nombre es  ${nombre}</h2>
    <h3>mido: ${altura} cm</h3>
    `;

    return misDatos;
}

/*
function imprimir() {
  var datos = document.getElementById("datos")
  datos.innerHTML = MuestraMinombre;

}

*/

function imprimir() {
  var datos = document.getElementById("datos")
  datos.innerHTML = MuestraMinombre("francisco granados", 190);

}

imprimir();

var nombres = ['francisco','esteban', 'drako']
for(i = 0; i < nombres.length; i++){
  document.write(nombres[i] + '<br/> ' );
  //alert(nombres[i] );

}


//alert(nombres[1]);
//document.write(concatenar);
//document.write(nombre);
//document.write(altura);
