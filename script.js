// Named Function para sumar
function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").value = resultado;
}

// Anonymous Function para restar
var restar = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
};

// Arrow Function para multiplicar
const multiplicar = () => {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").value = resultado;
};

// IIFE Function para dividir
(function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 == 0) {
        alert("No se puede dividir por cero");
        return;
    }
    var resultado = num1 / num2;
    document.getElementById("resultado").value = resultado;
})();

// Higher Order Function para la raiz
function raiz() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var resultado = calcularOperacion(num1, Math.sqrt);
    document.getElementById("resultado").value = resultado;
}

function calcularOperacion(num, operacion) {
    return operacion(num);
}

// Constructor Function para el exponente
function exponente() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = Math.pow(num1, num2);
    document.getElementById("resultado").value = resultado;
}

var exponente = new Exponente();
