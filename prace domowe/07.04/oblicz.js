  
function oblicz(){
	var a = document.getElementById("a").value;
	if(a==1){a=4}
	else if(a==2){a=3.5}
	else {a==0}
	var b = document.getElementById("b").value;
	var wynik = a * b;
	document.getElementById("wynik").innerHTML = "Koszt paliwa: "+wynik+" zł";
}