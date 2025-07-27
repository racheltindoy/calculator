const btn_con = document.querySelector('#btn_con');
const display = document.querySelector('#display');
display.textContent = '0';


btn_con.addEventListener('click', displayValues);

let isOperatorClicked = false;
let operatorClicked;
function displayValues(e) {
	const isClickedButton = e.target.closest('button');
	if(!isClickedButton) { return }
	let splitId = e.target.id.split('btn');
	let id = splitId[1];
	
	// Removes operator highlight when digit is pressed
	lightOffButton();

	if(!isNaN(id)) {
		// Reset display
		if(isOperatorClicked == true) { display.textContent = 0; isOperatorClicked = false; }
		if(display.textContent == '0') { display.textContent = ''; }
		display.textContent += id;
	} else {
		// Removes operator highlight when another operator is pressed
		lightUpButton(e);
		calculate(id, parseInt(display.textContent));
		
	}
}

let result = 0;
let result2;
let val1;
let val2;

function calculate(operator, displayValue) {
	if(!val1) {val1 = displayValue; val2 = 0; } else { val2 = displayValue;  }
	// console.log("RESULT: " + result);
	// console.log("VAL1: " + val1);
	// console.log("VAL2: " + val2);
	// console.log("--------------------------");
	switch(operator) {
		case 'Add': 
			result = val1+val2;
			val1 = result;
			val2 = null;
			break;
		case 'Subtract':
			result = val1-val2;
			val1 = result;
			val2 = null;
			break;
	}
	// console.log("RESULT: " + result);
	console.log("VAL1: " + val1);
	console.log("VAL2: " + val2);
	console.log("========================");

	display.textContent = result;
	isOperatorClicked = true;
}



function lightUpButton(e) {
	if(!operatorClicked) {operatorClicked = document.querySelector(`#` + e.target.id);}
	operatorClicked = document.querySelector(`#` + e.target.id);
	operatorClicked.classList.add('lit-up');
}

function lightOffButton() {
	operatorClicked ? operatorClicked.classList.remove('lit-up') : false;
}