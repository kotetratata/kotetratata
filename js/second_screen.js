

	let screenRatio = (document.getElementById('projects').offsetWidth/document.getElementById('projects').offsetHeight) > 1;
	let secondScreen = document.querySelector('#projects>div');
	let web =document.getElementById('web');
	let noweb = document.getElementById('noweb');
	if(!screenRatio){secondScreen.classList.add('portrait');}

	addEventListener("resize",()=>{
		
		screenRatio = (document.getElementById('projects').offsetWidth/document.getElementById('projects').offsetHeight) > 1;
		if(!screenRatio){secondScreen.classList.add('portrait');}
		else{secondScreen.classList.remove('portrait');}
	})

	document.getElementById('projects').addEventListener('mousedown',(ev)=>{

		let limit = screenRatio ? web.offsetWidth : web.offsetHeight;
		let mouse = screenRatio ? ev.pageX : ev.pageY;


		if( !( mouse < limit + 130 && mouse > limit - 130 )){
			return
		}

		addEventListener('mousemove',resizeProjects)
	})

	document.getElementById('projects').addEventListener('mouseup',()=>{
		removeEventListener('mousemove',resizeProjects)
	})




function resizeProjects(event) {
	if(screenRatio){
		let mouseX = event.pageX;
		web.style.width = mouseX+'px';
		noweb.style.width = document.getElementById('projects').offsetWidth-mouseX+'px';
	}else{
		let mouseY = event.pageY;
		web.style.height = mouseY+'px';
		noweb.style.height = document.getElementById('projects').offsetHeight-mouseY+'px';
	}


}