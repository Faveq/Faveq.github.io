function Oblicz(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var pole = 2 * (a * 2.7) + 2 * (b * 2.7);
	var cena = pole * 8;
	document.getElementById("Pole").innerHTML = "Powierzchnia całkowita ścian: " + pole;
	document.getElementById("Wynik").innerHTML = "Koszt malowania: " + cena + " zł";
	
}