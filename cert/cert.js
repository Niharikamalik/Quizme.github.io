const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const marksInput= document.getElementById('marks')
const subjectInput = document.getElementById('subject')
const downloadBtn = document.getElementById('download-btn')
const mostRecentScore = localStorage.getItem('mostRecentScore');
// marksInput.innerHTML=mostRecentScore;
const image = new Image()
image.src = '/cert/Certificate of Participation without name .png'

image.onload = function () {
	drawImage()
}


function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	nameInput,ctx.font = '35px   monotype corsiva';
	ctx.padding= '50%'
	ctx.fillStyle = 'black'
	ctx.fillText(nameInput.value,350, 300)
	
	ctx.fillText(subjectInput.value,230, 454)
	ctx.fillText(mostRecentScore , 650, 454)
	ctx.fillText("/100" ,700, 454)
}

nameInput.addEventListener('input', function () {
	drawImage();
	
	
	
})
subjectInput.addEventListener('input', function () {
	drawImage()})
	

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value 
	
	downloadBtn.download = 'Certificate - ' + subjectInput.value 	
	downloadBtn.download = 'Certificate - ' + mostRecentScore.value 
	downloadBtn.download = 'Certificate - ' + "/100".value 
	
})