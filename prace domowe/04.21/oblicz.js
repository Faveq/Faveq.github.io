function dodaj(){
	var a = document.getElementById ("a").value;
	var b = document.getElementById("b").value;
	var c= (a*1) + (b*1);
	wynik = Math.round(c);
	document.getElementById("wynik").innerHTML = "Wynik: " +wynik+ " ";
}
function odejmij(){
	var a = document.getElementById ("a").value;
	var b = document.getElementById("b").value;
	var c= (a*1) - (b*1);
	wynik = Math.round(c);
	document.getElementById("wynik").innerHTML = "Wynik: " +wynik+ " ";
}
function mnozenie(){
	var a = document.getElementById ("a").value;
	var b = document.getElementById("b").value;
	var c= (a*1) + (b*1);
	wynik = Math.round(c);
	document.getElementById("wynik").innerHTML = "Wynik: " +wynik+ " ";
}
function dzielenie(){
	var a = document.getElementById ("a").value;
	var b = document.getElementById("b").value;
	var c= (a*1) / (b*1);
	wynik = Math.round(c);
	document.getElementById("wynik").innerHTML = "Wynik: " +wynik+ " ";
}
function potega(){
	var a = document.getElementById ("a").value;
	var b = document.getElementById("b").value;
	var c= (a*1) ** (b*1);
	wynik = Math.round(c);
	document.getElementById("wynik").innerHTML = "Wynik: " +wynik+ " ";
}