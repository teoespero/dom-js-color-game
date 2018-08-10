	// Teo Espero
	// BS Cloud and Systems Administration
	// Western Governors University

	// #Web-Dev-Bootcamp-Udemy

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDsiplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetGame");

resetButton.addEventListener("click", function(){

	// re-generate all new colors
	colors = generateRandomColors(6);

	// pick a new random color from array
	pickedColor = pickColor();

	// change color display to picked color
	colorDisplay.textContent = pickedColor;

	// change colors of the squares
	for (var counter = 0; counter < squares.length; counter++){
		squares[counter].style.backgroundColor = colors[counter];
	}
	h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for (var counter = 0; counter < squares.length; counter++){

	// add initial colors
	squares[counter].style.backgroundColor = colors[counter];

	// add click listeners
	squares[counter].addEventListener("click", function(){
		// alert("Clicked a square");

		// grab color of clicked square
		// alert(this.style.backgroundColor);

		var clickedColor = this.style.backgroundColor;

		if (clickedColor === pickedColor){
			
			// if the user clicks on the right 
			// color.
			messageDsiplay.textContent = "Correct";

			// then change all the squares to
			// the color that was picked
			changeColors(clickedColor);

			// also change the <h1> tag's bg color
			h1.style.backgroundColor = clickedColor;

			resetButton.textContent = "Play Again?";

		}
		else {

			// if the player clicks on the wrong color
			// the square color should fade away
			// blending in with the background color
			this.style.backgroundColor = "#232323";
			messageDsiplay.textContent = "Try again";
		}

	});
}


function changeColors(color){

	// loop through all the squares
	// to match all the colors;
	for (var counter = 0; counter < squares.length; counter++){
		squares[counter].style.backgroundColor = color;
	}

}


function pickColor(){
	var randomRGB = Math.floor(Math.random() * colors.length);

	return colors[randomRGB];

}

function generateRandomColors(num){

	// make an array
	var arrBase = [];

	// add num random colors to array
	for (var counter = 0; counter < num; counter++){
		// get random colors and push it
		// into the array arrBase

		arrBase.push(randomColor());
	}

	// return that array

	return arrBase;
}

function randomColor(){

	// pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);

	// pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);

	// pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);

	// return our color combo
	return "rgb(" + r + ", " + g + ", " + b + ")";
}