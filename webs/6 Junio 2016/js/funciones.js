function prueba() {

  /* DECLARACION DE VARIABLES */
  var a = parseInt(document.formu.a.value)
  var vector = new Array()
  total = 0;

  /* CALCULO */
  for (x = 0; x <= 9; x++) {
    vector[x] = a
    total = total + a
  }

    /* OUTPUT */
    document.formu.respuesta.value = total
}



function bisiesto() {
    var a = document.formu.a.value;

    if (((a % 400) == 0)||((( a % 4) == 0) && (( a % 100 )!= 0))) {
      document.formu.respuesta.value = document.formu.respuesta.value + a + " es bisiesto.";
    } else {
      document.formu.respuesta.value = document.formu.respuesta.value + a +" no es bisiesto.";
    }
  }

/* CALCULADORA */
function suma() {
  var a = parseInt(document.formu.a.value);
  var b = parseInt(document.formu.b.value);

  document.formu.respuesta.value = a + b
}

function multiplicacion() {
  var a = parseInt(document.formu.a.value);
  var b = parseInt(document.formu.b.value)

  document.formu.respuesta.value = a * b
}

function division() {
  var a = parseInt(document.formu.a.value);
  var b = parseInt(document.formu.b.value)

  document.formu.respuesta.value = a / b
}

function potencia() {
  var a = parseInt(document.formu.a.value);
  var b = parseInt(document.formu.b.value)

  document.formu.respuesta.value = a ** b
}
