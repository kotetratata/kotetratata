let slides;
let curSlide;
let curPos;
document.addEventListener("DOMContentLoaded", ()=>{
	slides = document.getElementsByClassName('slide');
	curSlide = slides[0];
	curPos = 0;
	curSlide.classList.add('active');
});


function nextSlide() {
	if (curPos<4) {

		curSlide.classList.toggle('active');

		curSlide = slides[++curPos];

		curSlide.classList.toggle('active');
	}	
}
function prevSlide() {
	if (curPos>0) {

		curSlide.classList.toggle('active');

		curSlide = slides[--curPos];

		curSlide.classList.toggle('active');
	}
}
	