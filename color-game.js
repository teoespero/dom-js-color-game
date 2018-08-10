	// Teo Espero
	// BS Cloud and Systems Administration
	// Western Governors University

	// #Web-Dev-Bootcamp-Udemy

var colors = [
			"rgb(255,0,0)",
			"rgb(255,255,0)",
			"rgb(0,255,0)",
			"rgb(0,255,255)",
			"rgb(0,0,255)",
			"rgb(255,0,255)"
		]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var counter = 0; counter < squares.length; counter++){

	// add initial colors
	squares[counter].style.backgroundColor = colors[counter];

	// add click listeners
	squares[counter].addEventListener("click", function(){
		alert("Clicked a square");
	});
}


