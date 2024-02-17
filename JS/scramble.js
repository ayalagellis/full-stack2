
const words = [ 
	"Pesach", 
	"Purim", 
	"Sukkot", 
	"Shavuot", 
	"Chanuka", 
]; 

let score = 0; // Score variable to keep track of the user's score

// Initialize display word 
let displayWord = ""; 

// Function to mix letters 
function mixWord(str) { 
	strArray = Array.from(str); 
	for (let i = 0; i < strArray.length - 1; ++i) { 
		let j = Math.floor(Math.random() * strArray.length); 
		// Swap letters 
		let temp = strArray[i]; 
		strArray[i] = strArray[j]; 
		strArray[j] = temp; 
	} 
	return strArray.join(" "); 
} 

// Function to check input and display result 
function check() { 
	let input = document.getElementById("input"); 
	if ( 
		input.value.toLocaleLowerCase() === 
		displayWord.toLocaleLowerCase() 
	) {
        alert("Correct")
        score++; // Increment score if the guess is correct
        scoreDisplay.innerText = "Score: " + score; // Update the score display
        document.getElementById("input").value = ""; //cleans the input field
        newWord();
    }

	else {alert("Incorrect")}
} 

// To show new word 
function newWord() { 
	index = Math.floor(Math.random() * 5); 
	displayWord = words[index]; 
	scrambleWord = document.getElementById("scrambleWord"); 
	scrambleWord.innerText = mixWord(displayWord).toUpperCase(); 
} 

// Function call when page load for first time 
newWord();
