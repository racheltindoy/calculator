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
		
		if(val2 !== null) {val2 = parseInt(display.textContent); } 
		
	}
	else if(id === 'AC') { resetValues(); } 
	else if (id === 'Del') { removeLastDigit(); } 
	else {
		if(display.textContent == '0' && val1 === null) { return; }
		
		// Removes operator highlight when another operator is pressed
		if(isOperatorClicked == true) {
			lightUpButton(e); 
			operatorSelected = id;
			return;
		}

		lightUpButton(e);
		
		if(val1 === null) {val1 = parseInt(display.textContent);} 
		else { val2 = parseInt(display.textContent);  }

		// Initialize operator
		if(!operatorSelected) { 
			operatorSelected = id; 
			if(val2 !== null) {calculate(); }
		} else {
			if(val2 !== null) {calculate(); };
			operatorSelected = id;
		}

		display.textContent = result;
		
	}
}

let result = null;
let val1 = null;
let val2 = null;
let operatorSelected = null;

function calculate() {
	switch(operatorSelected) {
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
		case 'Multiply':
			result = val1*val2;
			val1 = result;
			val2 = null;
			break;
		case 'Divide':
			result = val1/val2;
			val1 = result;
			val2 = null;
			break;
	}

	isOperatorClicked = true;
}

function removeLastDigit() {
	let newDisplay = display.textContent = display.textContent.slice(0, -1);
	val1 = parseInt(newDisplay);
}

function resetValues() {
	result = null;
	val1 = null;
	val2 = null;
	operatorSelected = null;
	isOperatorClicked = false;
	operatorClicked = null;
	display.textContent = '0';
}


function lightUpButton(e) {
	if(!operatorClicked) {operatorClicked = document.querySelector(`#` + e.target.id);}
	operatorClicked = document.querySelector(`#` + e.target.id);
	operatorClicked.classList.add('lit-up');
}

function lightOffButton() {
	operatorClicked ? operatorClicked.classList.remove('lit-up') : false;
}