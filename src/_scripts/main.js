// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// Listen for keydown events with assoicated audio
window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Grab the audio
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // Grab the elements with the key class on it
  if(!audio) return ; // Don't move forward if there's no audio associated with a key
  audio.currentTime = 0; // Rewind to the beginning (for rolls etc)
  audio.play(); // Play the audio
  key.classList.add('playing'); // Add the playing class

});

// Remove the CSS class when the animation is over
function removeTransition(e){
  if (e.propertyName !== 'transform') return; // Prevent any events without transform on them from moving forward
  this.classList.remove('playing'); // Remove the class
}

// Grab each key and listen for the end of the transition, then run the removeTransition class
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
