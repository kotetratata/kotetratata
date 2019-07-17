const sides=[[0,0,0],[0,90,0],[0,180,0],[0,270,0],[-90,0,0],[90,0,0]];
let curPos=0;

document.addEventListener("DOMContentLoaded", ()=>{
	document.getElementById("next").addEventListener("click",nextSide);

	document.getElementById("prev").addEventListener("click",prevSide);

});


function nextSide() {
	console.log('tryin')
	if (curPos<5) {
		curPos++;
		degX = sides[curPos][0];
		degY = sides[curPos][1];
		degZ = sides[curPos][2];
		document.getElementById('cube').style.transform = "translateZ( -100px)  rotateX("+sides[curPos][0]+"deg) rotateY( "+sides[curPos][1]+"deg) rotateZ("+sides[curPos][2] +"deg)";
	}

}
function prevSide() {
	if (curPos>0) {
		curPos--;
		degX = sides[curPos][0];
		degY = sides[curPos][1];
		degZ = sides[curPos][2];
		document.getElementById('cube').style.transform = "translateZ( -100px)  rotateX("+sides[curPos][0]+"deg) rotateY( "+sides[curPos][1]+"deg) rotateZ("+sides[curPos][2] +"deg)";
	}
}
	