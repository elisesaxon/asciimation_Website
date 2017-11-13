function start() {
	alert("TIME TO START");
}

function stop() {
	alert("BETTER STOP");
}

function changeAnimation(choice) {
	document.getElementById("viewport").value=ANIMATIONS[choice];
}

function changeFontSize(newSize) {
	alert("change siiiiize: " + newSize);
}

function speedChange(box) {
	if(box.checked) {
		//make it turbo (50 ms delay)
	} else {
		//make it normal (250 ms delay)
	}
}