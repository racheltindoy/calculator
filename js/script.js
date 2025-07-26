const btn_con = document.querySelector('#btn_con');
const display = document.querySelector('#display');
display.textContent = '0';


btn_con.addEventListener('click', displayValues);

let checkOperator = false;
let operatorClicked;
function displayValues(e) {
	const isClickedButton = e.target.closest('button');
	if(!isClickedButton) { return }
	let splitId = e.target.id.split('btn');
	let id = splitId[1];
	
	if(!isNaN(id)) {
		// Removes operator highlight when digit is pressed
		operatorClicked ? operatorClicked.classList.remove('lit-up') : false;
		// Reset display
		if(checkOperator == true) { display.textContent = 0; checkOperator = false; }
		if(display.textContent == '0') { display.textContent = ''; }
		display.textContent += id;
	} else {
		// Removes operator highlight when another operator is pressed
		operatorClicked ? operatorClicked.classList.remove('lit-up') : false;
		if(!operatorClicked) {operatorClicked = document.querySelector(`#` + e.target.id);}
		operatorClicked = document.querySelector(`#` + e.target.id);
		operatorClicked.classList.add('lit-up');
		// console.log(operatorClicked);
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
			break;
		case 'Subtract':
			result = val1-val2;
			val1 = result;
			break;
	}
	// console.log("RESULT: " + result);
	console.log("VAL1: " + val1);
	console.log("VAL2: " + val2);
	console.log("========================");

	display.textContent = result;
	checkOperator = true;
}