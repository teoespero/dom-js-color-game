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

for (var counter = 0; counter < squares.length; counter++){
	squares[counter].style.backgroundColor = colors[counter];
}