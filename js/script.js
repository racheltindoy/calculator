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
		
		if(val2 != null) {val2 = parseInt(display.textContent);} 
		console.log('VAL1: ' + val1);
		console.log('VAL2: ' + val2);
		// console.log("--------------------------")
		
	} else {
		// Removes operator highlight when another operator is pressed
		lightUpButton(e);

		if(!val1) {val1 = parseInt(display.textContent);} 
		else { val2 = parseInt(display.textContent); }

		// Initialize operator
		if(!operatorSelected) { operatorSelected = id; }
		console.log(operatorSelected);
		
		if(val2 != null) {calculate(); }

		console.log('VAL1: ' + val1);
		console.log('VAL2: ' + val2);
		// console.log("--------------------------")

		display.textContent = result;
		
	}
}

let result = 0;
let result2;
let val1 = null;
let val2 = null;
let operatorSelected = null;

function calculate() {
	
	// console.log("RESULT: " + result);
	// console.log("VAL1: " + val1);
	// console.log("VAL2: " + val2);
	// console.log("--------------------------");
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
	}
	// console.log("RESULT: " + result);
	// console.log("VAL1: " + val1);
	// console.log("VAL2: " + val2);
	// console.log("========================");

	
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