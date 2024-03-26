let entradaCalculadora = document.getElementById("screen");
let temporal = 0;
let operacion = "";

function add(num) {
  console.log(num);
  if (num == 0) {
    if (entradaCalculadora.value != 0) entradaCalculadora.value += num;
  } else entradaCalculadora.value += num;
}

function addComa() {
  if (entradaCalculadora.value === "") {
    entradaCalculadora.value = "0.";
  } else if (!entradaCalculadora.value.includes(".")) {
    entradaCalculadora.value += ".";
  }
}

function cleanInput() {
  entradaCalculadora.value = "";
  temporal = "";
  operacion = "";
}

function operacionFunction(operador) {
  temporal = entradaCalculadora.value;
  entradaCalculadora.value = "";
  operacion = operador;
}

function igual() {
  entradaCalculadora.value = eval(
    temporal + operacion + entradaCalculadora.value
  );
}

function operacionPorcentaje() {
  entradaCalculadora.value = entradaCalculadora.value / 100;
}

function cambiarSimbolo() {
  entradaCalculadora.value = entradaCalculadora.value * -1;
}
