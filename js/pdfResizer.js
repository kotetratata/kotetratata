addEventListener("DOMContentLoaded",()=>{

	let pdfField = document.getElementById('pdfField'),
		fatherNode = document.getElementById("biography"),
		screenH = fatherNode.offsetHeight*.9,
		screenW = fatherNode.offsetWidth

	function setPDFsize(el,h,w) {

		el.innerHTML =`<iframe src="https://drive.google.com/file/d/1gM7S_CxANHsDF5Jcg6QTEUK5o1lUzKy4/preview" width="${w}" height="${h}"></iframe>`;
		
	}

	setPDFsize(pdfField,screenH,screenW);
	fatherNode.appendChild(pdfField);

	addEventListener("resize",()=>{
		screenH = fatherNode.offsetHeight*.9
		screenW = fatherNode.offsetWidth
		setPDFsize(pdfField,screenH,screenW);
		fatherNode.appendChild(pdfField);
	})
})