function oblicz(){
	var a = document.getElementById("a").value;
	var x = a / 4;
	wynik = Math.round(x);
	document.getElementById("wynik").innerHTML = "Ilość potrzebnych puszek: " +wynik+ " ";
}