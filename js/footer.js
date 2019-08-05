addEventListener("DOMContentLoaded",()=>{
	let showButton = document.getElementById('rise_button'),
		hideButton = document.getElementById('cut_button'),
		fullFooter = document.getElementById('hidden'),
		stringFooter = document.getElementById('common');

	showButton.addEventListener("click",()=>{
		fullFooter.classList.toggle('hidden');
		stringFooter.classList.toggle('hidden');
	})

	hideButton.addEventListener("click",()=>{
		fullFooter.classList.toggle('hidden');
		stringFooter.classList.toggle('hidden');
	})
})