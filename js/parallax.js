
document.addEventListener("DOMContentLoaded", ()=>{

	let layer = document.getElementById("introduction");
	let canvas = document.getElementById("parallax");
	let centerW = layer.offsetWidth/2;
	let centerH = layer.offsetHeight/2;
	const widthDelta = -22.07;
	const heightDelta = -22.9;

	window.addEventListener("resize", ()=>{
		centerW = layer.offsetWidth/2;
		centerH = layer.offsetHeight/2;
	})


	function parallax(event) {

			let deltaX = (event.pageX - centerW)/-widthDelta;
			let deltaY = (event.pageY - centerH)/-heightDelta;
			canvas.style.transform = "scale(1.1) translateX("+deltaX+"px) translateY("+deltaY+"px)"

	}

	layer.addEventListener("mousemove",parallax);
})