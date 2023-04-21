function sumar() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var resultado = num1 + num2;
	document.getElementById("resultado").value = resultado;
}

function restar() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var resultado = num1 - num2;
	document.getElementById("resultado").value = resultado;
}

function raiz() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var resultado = Math.sqrt(num1);
	document.getElementById("resultado").value = resultado;
}

function exponente() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var resultado = Math.pow(num1, num2);
	document.getElementById("resultado").value = resultado;
}


function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 == 0) {
        alert("No se puede dividir por cero");
        return;
    }
    var resultado = num1 / num2;
    document.getElementById("resultado").value = resultado;
}