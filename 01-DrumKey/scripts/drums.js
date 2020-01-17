
function playDrum(e){

    //It obtains the audio according to the key pressed 
    let drum = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    //It obtains the key box so we can apply the "playing" style
    let keyBox = document.querySelector(`div[data-key="${e.keyCode}"]`);

    //It checks if the audio for the pressed key exists
    if(!drum)
        return;
    else{

        //It assigns the playing class and it plays the audio
        keyBox.classList.add("playing");

        drum.currentTime = 0;
        drum.play();
    }
}

//It removes the "playing" class after the transition ended
function removePlayingClass(e){

    //It checks if the transitioned it just ended is the transform transition
    if(e.propertyName !== 'transform') 
        return;
    else   
        e.target.classList.remove('playing');
}

//We add a transitionend event to each of the keyboxes so we can remove the "playing" class after the transition finishes.
let keyBoxes = Array.from(document.querySelectorAll('.key'));
keyBoxes.forEach(keyBox => keyBox.addEventListener('transitionend',removePlayingClass))


window.addEventListener('keydown', playDrum);

