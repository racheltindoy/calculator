const btn_con = document.querySelector('#btn_con');
const display = document.querySelector('#display');
display.textContent = '0';


btn_con.addEventListener('click', (e) => {
	const isClickedButton = e.target.closest('button');
	if(!isClickedButton) { return }
	let splitId = e.target.id.split('btn');
	let id = splitId[1];

	if(!isNaN(id)) {
		if(display.textContent == '0') { display.textContent = ''; }
		display.textContent += id;
	}

	let val1 = 0;
	let val2 = 0;

	if(isNaN(id)) {
		switch(id) {
			case 'Add':
				console.log('add');
				display.textContent += '+';
				val1 = display.textContent;
				break;
			case 'AC':
				display.textContent = '0';
		}
	}
});
