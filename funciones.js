// Index
function actividad() {
  let ejer = document.getElementById("actividad").value;
  window.location.href = "./actividades/" + ejer + ".html";
}

// General
function descripcion() {
  window.modal.showModal();
}

function cerrar() {
  window.modal.close();
}

function random_num() {
  return Math.floor(Math.random() * 10 + 1);
}

function reiniciar() {
  document.location.reload();
}

// Ejercicio 1
function valor_nums() {
  document.getElementById("n1").innerText = random_num();
  document.getElementById("n2").innerText = random_num();
  document.getElementById("n3").innerText = random_num();
}

function get_result() {
  let n1 = Number(document.getElementById("n1").innerText);
  let n2 = Number(document.getElementById("n2").innerText);
  let n3 = Number(document.getElementById("n3").innerText);
  return n1 * n2 + n3;
}

function correccion(boton, ayuda, respuesta) {
  let resultado = get_result();
  if (respuesta === resultado) {
    ayuda.classList.remove("text-muted");
    ayuda.classList.add("text-success");
    ayuda.innerHTML = "> <b>Correcto!</b>";
  } else {
    ayuda.classList.remove("text-muted");
    ayuda.classList.add("text-danger");
    ayuda.innerHTML =
      "> <b>Fallaste!</b> el resultado era <b>" + resultado + "</b>";
  }
  boton.innerText = "Reiniciar";
}

function aceptar_1(boton) {
  let respuesta = Number(document.getElementById("respuesta").value);
  let ayuda = document.getElementById("ayuda");
  if (respuesta < 1) {
    ayuda.classList.remove("text-success");
    ayuda.classList.remove("text-danger");
    ayuda.classList.add("text-muted");
    ayuda.innerText = "> Debes escribir un número mayor 1";
  } else correccion(boton, ayuda, respuesta);
}

function accion_1() {
  let btn = document.getElementById("boton");
  if (btn.innerText === "Aceptar") {
    aceptar_1(btn);
  } else if (btn.innerText === "Reiniciar") {
    reiniciar();
  }
}

// Ejercicio 2_1
let incrementado = function increment(num) {
  return num + 1;
};

function ejer2_1(func) {
  let num = func();
  document.getElementById("p1").innerText = num;
  document.getElementById("p2").innerText = incrementado(num);
}

// Ejercicio 2_2
let clear2_2 = (ayuda2_2) =>
  setTimeout(() => {
    ayuda2_2.innerText = "";
  }, 5000);

function mostrar_alerta(alerta, n1, n2) {
  alerta.innerHTML =
    "<div class='mb-5 alert alert-primary alert-dismissible fade show'>" +
    "Parece que: <b>" +
    n1 +
    " > " +
    n2 +
    "</b>" +
    "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
    "</div>";
}

function suma2_2(ayuda2_2, n1, n2) {
  ayuda2_2.innerHTML =
    "<b>" +
    n1 +
    " <= " +
    n2 +
    "</b>" +
    "<p>La suma es =  <b>" +
    (n1 + n2) +
    "</b></p>";
  clear2_2(ayuda2_2);
}

function aceptar2_2() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let ayuda2_2 = document.getElementById("ayuda2_2");
  let alerta = document.getElementById("alerta");
  alerta.innerText = "";
  ayuda2_2.innerText = "";

  if (n1 < 1 || n2 < 1) {
    ayuda2_2.innerText = "> Debes escribir números mayores a 1";
    clear2_2(ayuda2_2);
    return;
  }

  if (n1 > n2) {
    // alert(n1 + " > " + n2);
    mostrar_alerta(alerta, n1, n2);
  } else suma2_2(ayuda2_2, n1, n2);
}

// Ejercicio 2_3
function ejer2_3() {
  function addNumbers() {
    firstNum = random_num();
    secondNum = random_num();
    result = firstNum + secondNum;
    alert("Números: " + firstNum + ", " + secondNum);
    return result;
  }
  result = 0;
  alert("Resultado = " + result);
  sum = addNumbers();
  alert("Resultado = " + sum);
}

// Ejercicio 3
let get_array = () =>
  (document.getElementById("array").innerText = Array.from(
    { length: 500 },
    () => random_num()
  ));

function cerrar_array() {
  window.modal_array.close();
}
function ver_array() {
  window.modal_array.showModal();
}

/**
 * El bucle for es una estructura de control en programación en la
 * que se puede indicar de antemano el número máximo de iteraciones
 */
function for_loop(numeros) {
  let loop = document.getElementById("for");
  let start = Date.now();
  for (let i = 0; i < numeros.length; i++) {
    loop.innerHTML += numeros[i] + " ";
  }
  let end = Date.now();
  loop.innerHTML += "<br /><b>Tiempo: </b>";
  loop.innerHTML += (end - start) / 1000 + " segundos";
}

/**
 *  Se utiliza para recorrer estructuras
 *  repetitivas de datos de forma más simple y ágil
 */
function foreach_loop(numeros) {
  let loop = document.getElementById("foreach");
  let start = Date.now();
  numeros.forEach((num) => {
    loop.innerHTML += num + " ";
  });
  let end = Date.now();
  loop.innerHTML += "<br /><b>Tiempo: </b>";
  loop.innerHTML += (end - start) / 1000 + " segundos";
}

/**
 * La instrucción for-in itera sobre todas las propiedades
 * enumerables de un objeto que está codificado por cadenas
 */
function forin_loop(numeros) {
  let loop = document.getElementById("forin");
  let start = Date.now();
  for (num in numeros) {
    loop.innerHTML += numeros[num] + " ";
  }
  let end = Date.now();
  loop.innerHTML += "<br /><b>Tiempo: </b>";
  loop.innerHTML += (end - start) / 1000 + " segundos";
}

/**
 * La sentencia sentencia for-of ejecuta un bloque
 * de código para cada elemento de un objeto iterable
 */
function forof_loop(numeros) {
  let loop = document.getElementById("forof");
  let start = Date.now();
  for (let n of numeros) {
    loop.innerHTML += n + " ";
  }
  let end = Date.now();
  loop.innerHTML += "<br /><b>Tiempo: </b>";
  loop.innerHTML += (end - start) / 1000 + " segundos";
}

function ejer3() {
  let a = document.getElementById("array").innerText;
  let numeros = a.split(",").map(Number);
  for_loop(numeros);
  foreach_loop(numeros);
  forin_loop(numeros);
  forof_loop(numeros);
}

function accion_3() {
  let btn = document.getElementById("boton_3");
  if (btn.innerText === "Mostrar Diferencias") {
    ejer3();
    btn.innerText = "Reiniciar";
  } else if (btn.innerText === "Reiniciar") {
    reiniciar();
  }
}
