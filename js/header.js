addEventListener("DOMContentLoaded",()=>{
	let links = [...document.querySelectorAll('nav>ul>li>a')];


	for (let link in links){
		links[link].onclick = (ev)=>{
			activation(ev);
		}
	}
	function activation(ev) {
		for(let link in links){
			links[link].classList.remove('active');
		}
		ev.target.classList.add('active')
	}

})