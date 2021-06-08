function insert(num) {
  let inserido = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = inserido + num;
}

function clearDisplay() {
  document.getElementById('resultado').innerHTML = "";
}

function clearLast() {
  let inserido = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = inserido.substring(0, inserido.length - 1);
}

function calcular() {
  let inserido = document.getElementById('resultado').innerHTML;
  if (inserido) {
    document.getElementById('resultado').innerHTML = eval(inserido);
  }
  else {
    document.getElementById('resultado').innerHTML = "Erro de Input";
  }
}
