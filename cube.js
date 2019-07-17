let lastMouth;
let degX = 0;
let degY = 0;
let degZ = 0;
let angleY = 0;


function cubeRotate() {
	document.getElementById('cube').style.transform = "translateZ( -100px) rotateX("+degX+"deg) rotateY( "+degY+"deg) rotateZ("+degZ +"deg)";
}



document.addEventListener("DOMContentLoaded", ()=>{
	document.addEventListener("mousedown",(ev)=>{
		lastMouth = [ev.pageX,ev.pageY];
		document.addEventListener("mousemove", paramCalc);
	})
	
	document.addEventListener("mouseup",()=>{
		document.removeEventListener("mousemove", paramCalc);
	})

});


function paramCalc(ev) {
	angleY = ((degY%360)+360)%360;
	let ratioZ = 0;
	let ratioX = 0;

	if(angleY >= 0 && angleY < 90)
		{
			ratioZ = (1/90)*angleY;
			ratioX = 1-ratioZ;
		}
	if(angleY >= 90 && angleY < 180)
		{
			ratioZ = (1/90)*(180-angleY);
			ratioX = -(1-ratioZ);
		}
	if(angleY >= 180 && angleY < 270)
		{
			ratioZ =  -(1/90)*(angleY-180);
			ratioX = -(1+ratioZ);
		}
	if(angleY >= 270 && angleY < 360)
		{
			ratioZ = -(1/90)*(360-angleY);
			ratioX = 1+ratioZ;
		}

	degY += 360*((ev.pageX-lastMouth[0])/document.documentElement.clientWidth);

	degX -= ratioX*360*((ev.pageY-lastMouth[1])/document.documentElement.clientHeight);

	degZ -= ratioZ*360*((ev.pageY-lastMouth[1])/document.documentElement.clientHeight);

	lastMouth = [ev.pageX,ev.pageY];
	
	cubeRotate();

}