/* Elise Saxon
 * CS342: Web Scripting, WWU
 * Due Nov. 17, 2017
 * 
 * ASCIImation website: A site formatted based on Homework #4 specifications.
 * Practice with javascript concepts.
 * This JavaScript file contains the functions that execute behavior for each
 * of the controls in the site's GUI. These controls do the work of starting,
 * stopping, and changing the animation in the textarea on the site.
 */


"use strict";

var loopingvar;
var scenes;
var sceneidx = -1;
var speed = 250;


/* function: start
 * arguments: none
 * 
 * This function controls the behavior for starting an animation. This includes 
 * enabling and disabling other controls, capturing the text that is in the 
 * textarea at start time, splitting that into an array by the string "=====\n",
 * and begins a global setInterval variable to call the loop function on a timer 
 * based on the default or specified animation speed.
 */
function start() {
	document.getElementById("stopbutton").disabled = false;
	document.getElementById("startbutton").disabled = true;
	document.getElementById("animationmenu").disabled = true;

	if(!scenes) {
		scenes = document.getElementById("viewport").value.split("=====\n");
	}
	
    loopingvar = setInterval(loop, speed);
}


/* function: loop
 * arguments: none
 * 
 * Called by the timer "loopingvar" in the start function, this code drives the 
 * animation by iterating through the animation text array infinitely and displaying
 * each value of the array until this function is called again and the array value 
 * to display changes.
 */
function loop() {
	if(sceneidx < (scenes.length - 1)) {
		sceneidx++;
	} else {
		sceneidx = 0;
	}
	
    document.getElementById("viewport").value = scenes[sceneidx];
}


/* function: stop
 * arguments: none
 * 
 * Executes when the user presses the "stop" button in the GUI. This function 
 * controls the stopping behavior for an animation, which includes deactivating
 * certain controls of the GUI and clearing the interval timer.
 */
function stop() {
	document.getElementById("startbutton").disabled = false;
	document.getElementById("animationmenu").disabled = false;
	document.getElementById("stopbutton").disabled = true;
	
    clearInterval(loopingvar);
    loopingvar = 0;
}


/* function: changeAnimation
 * arguments: user-selected animation title
 * 
 * When the user selects a new animation from the Animation dropdown of the GUI,
 * the value of the selection is passed to this function, which queries the ANIMATIONS
 * global array of animations.js for that display text, sets the value of the textarea
 * to that array, and clears the array of separate animation scenes. 
 */
function changeAnimation(choice) {
	document.getElementById("viewport").value = ANIMATIONS[choice];
	
	scenes = 0;
}


/* function: changeFontSize
 * arguments: user-selected text size 
 * 
 * When the user selects a new text size from the Size dropdown of the GUI, the value
 * of that selection is passed to this function, which uses the DOM to change the font
 * size of the textarea to the new font size.
 */
function changeFontSize(newSize) {
	document.getElementById("viewport").style.fontSize = newSize;
}


/* function: speedChange
 * arguments: value of checkbox (checked or unchecked)
 * 
 * When the user clicks on the checkbox in the Turbo control area of the GUI, the 
 * new value of the checkbox is passed to this function. This code changes the speed
 * of the timer that calls loop() based on the checkbox's value.
 */
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
