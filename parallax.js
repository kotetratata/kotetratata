
document.addEventListener("DOMContentLoaded", ()=>{
	let layer = document.getElementById("frontface");
	let canvas = document.getElementById("parallax");
	let centerW = layer.offsetWidth/2;
	let centerH = layer.offsetHeight/2;

	function parallax(event) {

		let deltaX = (event.pageX - centerW)/-11.07;
		let deltaY = (event.pageY - centerH)/-10.9;

		canvas.style.transform = "scale(1.1) translateX("+deltaX+"px) translateY("+deltaY+"px)"
	}
	
	layer.addEventListener("mousemove",parallax);
})