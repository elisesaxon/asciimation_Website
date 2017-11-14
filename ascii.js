var loopingvar;
var sceneidx = -1;

function start() {
	var scenes = document.getElementById("viewport").value.split("=====\n");
    loopingvar = setInterval(loop, 250, scenes);
}

function loop(scenes) {
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
}

function changeFontSize(newSize) {
	document.getElementById("viewport").style.fontSize = newSize;
}

function speedChange(box) {
	if(box.checked) {
		//make it turbo (50 ms delay)
		//setInterval("start()", 50);
	} else {
		//make it normal (250 ms delay)
		//setInterval("start()", 250);
	}
}