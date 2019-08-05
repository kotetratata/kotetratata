addEventListener("DOMContentLoaded",()=>{

	let pdfField = document.getElementById('pdfField'),
		fatherNode = document.getElementById("biography"),
		screenH = fatherNode.offsetHeight,
		screenW = fatherNode.offsetWidth

	function setPDFsize(el,h,w) {

		el.innerHTML = `<iframe src="https://drive.google.com/file/d/1BLEUbTnWOxhk18RrZG6Sm23OPSRCHiH-/preview" width="${w}" height="${h}"></iframe>`
	}

	setPDFsize(pdfField,screenH,screenW);
	fatherNode.appendChild(pdfField);

	addEventListener("resize",()=>{
		screenH = fatherNode.offsetHeight
		screenW = fatherNode.offsetWidth
		setPDFsize(pdfField,screenH,screenW);
		fatherNode.appendChild(pdfField);
	})
})