//Manipulating the DOM

let containerDiv = document.querySelector(".container-div");

let colorDisplay = document.getElementById("colorDisplay");

let numberInput = document.getElementById("input");

let generateButton = document.getElementById("button");

let rgbValue = document.querySelector("h4");



const colorGeneratorLogic = () => {
	//Extractiing the range for rgb colors
	let r = Math.floor(Math.random(numberInput.value) * 255) 
	let g = Math.floor(Math.random(numberInput.value) * 255)
	let b = Math.floor(Math.random(numberInput.value) * 255)

    //Using the rgb colors to set the backgroundColorand borderColor of elements
	colorDisplay.style.backgroundColor = `rgb(${r},${g},${b})`;

	containerDiv.style.borderColor = `rgb(${r},${g},${b})`;

	numberInput.style.borderColor = `rgb(${r},${g},${b})`;

	generateButton.style.borderColor = `rgb(${r},${g},${b})`;

	generateButton.style.backgroundColor = `rgb(${r},${g},${b})`;

    //Setting a condition when nothing is entered in the number-input field
	if (numberInput.value === ""){
		        alert("You did not enter a valid number");
		        colorDisplay.style.backgroundColor = "#fff";
		        containerDiv.style.borderColor = "#04068c";
		        numberInput.style.borderColor = "#04068c";
		        generateButton.style.borderColor = "#04068c";
	            generateButton.style.backgroundColor = "#04068c";
	            rgbValue.textContent="";
	         }

    //Setting a condition when the number-input value entered is less than 0 and greater than 255
	else if (numberInput.value < 0 || numberInput.value > 255){
		       alert("Please enter a number between 0 and 255");
		       colorDisplay.style.backgroundColor = "#fff";
		       containerDiv.style.borderColor = "#04068c";
		       numberInput.style.borderColor = "#04068c";
		       generateButton.style.borderColor = "#04068c";
	           generateButton.style.backgroundColor = "#04068c";
	           rgbValue.textContent = "";
	         }


	else {rgbValue.textContent = `rgb(${r},${g},${b})`;}

    //Emptying the number-input content upon click of the generate color value
	numberInput.value = "";

}


//EventListener to generate the colors upon click
generateButton.addEventListener("click", colorGeneratorLogic);