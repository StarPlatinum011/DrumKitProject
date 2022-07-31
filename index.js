
let btn = document.querySelectorAll('.drum');

//listen to the click events from .drum class
btn.forEach((bt)=>{
    bt.addEventListener('click',(e)=>{
        makeSound(bt.innerHTML);  
        makeAnimations(bt.innerHTML); 
    });
});

//listen to the key pressed from entire document
document.addEventListener('keydown',function(e) {
    makeSound(e.key);
    makeAnimations(e.key);
})

//create the sound depending on the key and click
function makeSound (key) {
    switch(key){
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            
        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'l':
            let bass = new Audio('sounds/kick-bass.mp3');
            bass.play();
            break;

        default: console.log(bt.innerHTML);
    }
}

//make animation 
function makeAnimations (ani) {
    let animateBtn = document.querySelector('.'+ani);
    animateBtn.classList.add('pressed'); //adds the element to the css class

    //now remove the animation class and add time duration
    setTimeout(function(){
        animateBtn.classList.remove('pressed');
    }, 100); //second param to add duration in millisecond
}