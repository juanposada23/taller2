//simbolo suma
function simboloSuma(){
	return document.getElementById("operacion").innerHTML = " + ";
}

//simbolo resta
function simboloResta(){
	return document.getElementById("operacion").innerHTML = " - ";
}

//simbolo multiplicación
function simboloMultiplicacion(){
	return document.getElementById("operacion").innerHTML = " * ";
}

//simbolo división
function simboloDivision(){
	return document.getElementById("operacion").innerHTML = " / ";
}

//simbolo potencia
function simboloPotencia(){
	return document.getElementById("operacion").innerHTML = " ^ ";
}

//simbolo null
function simboloNull(){
	return document.getElementById("operacion").innerHTML = " ";
}

//sumar
function sumar(){
	let num1 =  parseInt(document.getElementById("num1").value);
	let num2 =  parseInt(document.getElementById("num2").value);

	return  document.getElementById("result2").innerHTML = (num1 + num2) ;
}

//restar
function restar(){
	let num1 =  parseInt(document.getElementById("num1").value);
	let num2 =  parseInt(document.getElementById("num2").value);

	return  document.getElementById("result2").innerHTML = (num1 - num2) ;
}

//multiplicar
function multiplicar(){
	let num1 =  parseInt(document.getElementById("num1").value);
	let num2 =  parseInt(document.getElementById("num2").value);

	return  document.getElementById("result2").innerHTML = (num1 * num2) ;
}

//dividir
function dividir(){
	let num1 =  parseInt(document.getElementById("num1").value);
	let num2 =  parseInt(document.getElementById("num2").value);

	return  document.getElementById("result2").innerHTML = (num1 / num2) ;
}

//potencia
function potencia(){
	let num1 =  parseInt(document.getElementById("num1").value);
	let num2 =  parseInt(document.getElementById("num2").value);

	return  document.getElementById("result2").innerHTML = (Math.pow(num1, num2)) ;
}

//resetear
function resetear(){
	document.getElementById("num1").value = 0;
	document.getElementById("num2").value = 0;
}
