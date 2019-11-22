addEventListener("DOMContentLoaded",()=>{

	let sections = document.querySelectorAll('section');

	let menu = document.querySelectorAll('nav>ul>li>a');
	
	sections[1].classList.add('hidden');
	sections[2].classList.add('hidden');

	for (let i = menu.length - 1; i >= 0; i--) {
		menu[i].addEventListener("click",()=>{
			for (let y = sections.length - 1; y >= 0; y--) {
				sections[y].classList.add('hidden');
			}
			sections[i].classList.remove('hidden');
		})
	}
})

setTimeout(()=>{
	alert('the site is only at the initial stage of development')
}, 1000);
