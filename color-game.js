	// Teo Espero
	// BS Cloud and Systems Administration
	// Western Governors University

	// #Web-Dev-Bootcamp-Udemy

//----------------------------------------------------------------------------
// Main code
//----------------------------------------------------------------------------


// this var tracks which mode the
// player is on - HARD (6) or EASY (3)
var numberOfSquares = 6;


var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDsiplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetGame");
var btnEasy = document.querySelector("#btnEasy");
var btnHard = document.querySelector("#btnHard");



btnEasy.addEventListener("click", function(){

	// set the mode
	numberOfSquares = 3;

	// un-select HARD and set the active state 
	// to the EASY button
	btnHard.classList.remove("selected");
	btnEasy.classList.add("selected");

	// generate 3 new colors
	colors = generateRandomColors(numberOfSquares);

	// make a new picked color
	pickedColor = pickColor();

	// update the pciked color message
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++){

		// update only the first three 
		// squares
		if (colors[i]){
			squares[i].style.background = colors[i];
		}
		// hide the other squares
		else {
			squares[i].style.display = "none";
		}
	}
});

btnHard.addEventListener("click", function(){

	// set the mode
	numberOfSquares = 6;

	// un-select EASY and set the active state 
	// to the HARD button
	btnEasy.classList.remove("selected");
	btnHard.classList.add("selected");

	// generate 6 new colors
	colors = generateRandomColors(numberOfSquares);

	// make a new picked color
	pickedColor = pickColor();

	// update the pciked color message
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++){

		// update the six squares
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}

});



resetButton.addEventListener("click", function(){

	// re-generate all new colors
	// base on the last mode set
	colors = generateRandomColors(numberOfSquares);

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


//----------------------------------------------------------------------------
// Functions
//----------------------------------------------------------------------------

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