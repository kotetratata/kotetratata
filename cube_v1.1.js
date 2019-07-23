let lastMouth;
let deg = {
	X:0,
	Y:0,
	Z:0
}
let quater = {
	X:0,
	Y:0,
	Z:0
}

function cubeRotate() {
	document.getElementById('cube').style.transform = "translateZ( -100px) rotateX("+deg.X+"deg) rotateY( "+deg.Y+"deg) rotateZ("+deg.Z +"deg)";
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
	quater.X = quaterFound(deg.X);
	quater.Y = quaterFound(deg.Y);
	quater.Z = quaterFound(deg.Z);
	

	let ratioXd = {
		Y:0,
		Z:0
	}
	let ratioYd ={
		X:0,
		Z:0
	}
	let ratioZd = {
		X:0,
		Y:0
	}

	ratioYd=ratioFound(quater.Y,ratioYd);



	deg.Y += 360*((ev.pageX-lastMouth[0])/document.documentElement.clientWidth);

	deg.X -= ratioYd.X*360*((ev.pageY-lastMouth[1])/document.documentElement.clientHeight);

	deg.Z -= ratioYd.Z*360*((ev.pageY-lastMouth[1])/document.documentElement.clientHeight);

	lastMouth = [ev.pageX,ev.pageY];
	
	cubeRotate();

}


function quaterFound(angle) {
	const curAngle = ((angle%360)+360)%360;
	if (curAngle >= 0 && curAngle<90){
		return 1;
	}else{
		if (curAngle<180) {
			return 2;
		}
		else{
			if (curAngle<270) {
				return 3;
			}
			else{
				return 4;
			}
		}
	}
	
}
function ratioFound(angle,obj) {

	if(angle >= 0 && angle < 90)
		{
			obj.Z = (1/90)*angle;
			obj.X = 1-obj.Z;
		}
	if(angle >= 90 && angle < 180)
		{
			obj.Z = (1/90)*(180-angle);
			obj.X = (1-obj.Z);
		}
	if(angle >= 180 && angle < 270)
		{
			obj.Z =  -(1/90)*(angle-180);
			obj.X = (1+obj.Z);
		}
	if(angle >= 270 && angle < 360)
		{
			obj.Z = -(1/90)*(360-angle);
			obj.X = (1+obj.Z);
		}

		return obj
}