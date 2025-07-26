const btn_con = document.querySelector('#btn_con');
const display = document.querySelector('#display');
display.textContent = '0';


btn_con.addEventListener('click', displayValues);
	
	// displayValues;

	// let val1 = 0;
	// let val2 = 0;

	// if(isNaN(id)) {
	// 	switch(id) {
	// 		case 'Add':
	// 			console.log('add');
	// 			display.textContent += '+';
	// 			val1 = parseInt(display.textContent);
	// 			break;
	// 		case 'AC':
	// 			display.textContent = '0';
	// 	}
	// }
// });

let checkOperator = false;
let operatorClicked;
function displayValues(e) {
	const isClickedButton = e.target.closest('button');
	if(!isClickedButton) { return }
	let splitId = e.target.id.split('btn');
	let id = splitId[1];
	

	if(!isNaN(id)) {
		operatorClicked ? operatorClicked.classList.remove('lit-up') : false;

		if(checkOperator == true) { display.textContent = 0; checkOperator = false; }
		if(display.textContent == '0') { display.textContent = ''; }
		display.textContent += id;
	} else {
		if(!operatorClicked) {operatorClicked = document.querySelector(`#` + e.target.id);}
		operatorClicked = document.querySelector(`#` + e.target.id);
		operatorClicked.classList.add('lit-up');
		console.log(operatorClicked);
		calculate(id, parseInt(display.textContent));
	}
}

let val1;
let val2;

function calculate(operator, displayValue) {
	if(!val1) {val1 = displayValue; }
	else { val2 = displayValue; }
	
	console.log("Display value:" + displayValue);
	switch(operator) {
		case 'Add': 
			checkOperator = true;
			if(!val2) {val2 = 0;}
			val1 += val2;
			display.textContent = val1;
			break;
	}
}
