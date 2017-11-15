var loopingvar;
var scenes;
var sceneidx = -1;
var speed = 250;


function start() {
	document.getElementById("stopbutton").disabled = false;
	document.getElementById("startbutton").disabled = true;
	document.getElementById("animationmenu").disabled = true;

	if(!scenes) {
		scenes = document.getElementById("viewport").value.split("=====\n");
	}
	
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
	document.getElementById("startbutton").disabled = false;
	document.getElementById("animationmenu").disabled = false;
	document.getElementById("stopbutton").disabled = true;
	
    clearInterval(loopingvar);
    loopingvar = 0;
}


function changeAnimation(choice) {
	document.getElementById("viewport").value = ANIMATIONS[choice];
	
	scenes = 0;
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
	
	if(loopingvar) {
		stop();
		start();
	}
}
