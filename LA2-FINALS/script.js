//function to handle scroll event
function scroll() {
    console.log('You are scrolling!');
    // console.log('Vertical scroll position:', window.scrollY);
    // console.log('Horizontal scroll position:', window.scrollX);
}
  
window.addEventListener('scroll', scroll);
  
//function to change background color of an element when the mouse enters the element
function changeBGColor(event) {    
    event.target.style.backgroundColor = 'white';
}

//function to restore background color of an element when the mouse leaves the element
function restoreBGColor(event) {    
    event.target.style.backgroundColor = '';
}
  
const element = document.getElementById('form');
  
element.addEventListener('mouseenter', changeBGColor);
element.addEventListener('mouseleave', restoreBGColor);

//function that handles form submission
function alertSubmit(event) {    
    // Show an alert when the form is submitted
    alert('Form submitted!');
}
const form = document.getElementById('form-btn');
  
form.addEventListener('click', alertSubmit);

//function that would print the keycode when a key is pressed
function printKeyDown(event) {
  const keyCode = event.keyCode || event.which;

  // Print the key code to the console
  console.log('Key Down:', keyCode);
}

//function that would print the keycode when a key is released
function printKeyUp(event) {
  const keyCode = event.keyCode || event.which;

  // Print the key code to the console
  console.log('Key Up:', keyCode);
}

window.addEventListener('keydown', printKeyDown);
window.addEventListener('keyup', printKeyUp);


function alertResize() {
  // Show an alert when the window is resized
  alert('You are resizing the window!');
}

window.addEventListener('resize', alertResize);

  
  
  

