function ordenacion() {

  /* DECLARACION DE VARIABLES */
  var vector = [parseInt(document.formu.a.value),
                parseInt(document.formu.b.value),
                parseInt(document.formu.c.value)]

  // Tambien es posible hacerlo por separado
  // (el parseInt() es obligatorio para que funcione).

  // var vector = new Array()
  // vector[0] = parseInt(document.formu.a.value)
  // vector[1] = parseInt(document.formu.b.value)
  // vector[2] = parseInt(document.formu.c.value)


    /* ORDENACION VECTOR Y CONVERSION A TEXTO*/
    vector.sort();

    for (x=0; x<3; x++) {
        switch (vector[x]) {
            case 1:
                vector[x] = 'Uno';
                break;
            case 2:
                vector[x] = 'Dos';
                break;
            case 3:
                vector[x] = 'Tres';
                break;
            case 4:
                vector[x] = 'Cuatro';
                break;
            case 5:
                vector[x] = 'Cinco';
                break;
            case 6:
                vector[x] = 'Seis';
                break;
            case 7:
                vector[x] = 'Siete';
                break;
            case 8:
                vector[x] = 'Ocho';
                break;
            case 9:
                vector[x] = 'Nueve';
        }
    }

    /* OUTPUT */
    document.formu.respuesta.value = vector[0] + ', ' + vector[1] + ', ' + vector[2]
}



function factorial() {

  /* DECLARACION VARIABLES */
  var a = parseInt(document.formu.a.value) / 2
  var total = 1
  var x;

  /* EJECUCION */
  for (x = 1; x <= a; x++) {
    total = total * x
  }

  /* OUTPUT */
  document.formu.respuesta.value = total
}



function impares() {

  /* DECLARACION VARIABLES */
  var a = parseInt(document.formu.a.value)
  var x;

  /* EJECUCION */
  for (x = 1; x < a; x++) {
    if (x % 2 == 1) {
      /* OUTPUT
      (es necesario utilizar un blanco para que no sume los valores)*/
      document.formu.respuesta.value = document.formu.respuesta.value + " " + x
    }
  }
}



function divisores() {

  /* DECLARACION VARIABLES */
  var a = parseInt(document.formu.a.value) / 2
  var x;

  /* EJECUCION */
  for (x = 1; x <= a; x++) {
    if (a % x == 0) {
      /* OUTPUT
      (es necesario utilizar un blanco para que no sume los valores)*/
      document.formu.respuesta.value = document.formu.respuesta.value + " " + x
    }
  }
}
