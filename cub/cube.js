let lastMouth;
let degX = 0;
let degY = 0;


function cubeRotate(ev) {
	degX -= 360*((ev.pageY-lastMouth[1])/document.documentElement.clientHeight)/2;
	degY += 360*((ev.pageX-lastMouth[0])/document.documentElement.clientWidth);
	lastMouth = [ev.pageX,ev.pageY];
	document.getElementById('cube').style.transform = "translateZ( -100px) rotateY( "+degY+"deg) rotateX("+degX+"deg)";
}



document.addEventListener("DOMContentLoaded", ()=>{
	document.addEventListener("mousedown",(ev)=>{
		lastMouth = [ev.pageX,ev.pageY];
		document.addEventListener("mousemove", cubeRotate);
	})
	
	document.addEventListener("mouseup",()=>{
		document.removeEventListener("mousemove", cubeRotate);
	})
});