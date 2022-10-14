console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}
function suprise (duck) {
	duck.preventDefault()

	alert(`Das ist gut!!`)
}

let form = document.querySelector('#contact');
let ducky = document.querySelector(`img`)
form.addEventListener('submit', handleSubmit);
ducky.addEventListener(`mouseover`, suprise)