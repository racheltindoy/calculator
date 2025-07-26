const btn_con = document.querySelector('#btn_con');
btn_con.addEventListener('click', (e) => {
	const isClickedButton = e.target.closest('button');
	if(!isClickedButton) { return }
	let splitId = e.target.id.split('btn');
	let id = splitId[1];


	console.log(id);
})