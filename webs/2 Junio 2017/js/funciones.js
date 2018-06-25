function calculo() {
  var a = parseInt(document.formu.a.value);
  var primo = true;
  b = String(a)
  
  for(x = 2; x < a; x++) {
    if(a % x == 0) {
      primo = false
    }}

  if (primo == true){
    document.formu.respuesta.value = 'Es primo y tiene ' + b.length + ' digitos.';
  } else {
    document.formu.respuesta.value = 'No es primo y tiene ' + b.length + ' digitos.';
  }
}
