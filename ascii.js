var loopingvar;
var scenes;
var sceneidx = -1;
var speed = 250;


function start() {
	// DON'T CAPTURE THE TEXT TO ANIMATE UNTIL THE USER PRESSES START BUTTON
    loopingvar = setInterval(loop, speed);
}

function loop() {
	if(sceneidx < (scenes.length - 1)) {
		sceneidx++;
	} else {
		sceneidx = 0;
	}
	
    document.getElementById("viewport").value = scenes[sceneidx];
}

function stop() {
    clearInterval(loopingvar);
}

function changeAnimation(choice) {
	document.getElementById("viewport").value = ANIMATIONS[choice];
	
	scenes = document.getElementById("viewport").value.split("=====\n");
}

function changeFontSize(newSize) {
	document.getElementById("viewport").style.fontSize = newSize;
}

function speedChange(box) {
	if(box.checked) {
		speed = 50;
	} else {
		speed = 250;
	}
	stop();
	start();
}