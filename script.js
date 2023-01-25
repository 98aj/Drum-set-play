let d = document
    .querySelectorAll(".drum")
    .length;

function makeSuound(key) {
    
    switch (key) {
        case "w":
            let tom1 = new Audio("./tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("./tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("./tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("./tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let kicks = new Audio("./kick-bass.mp3");
            kicks.play();
            break;

        case "k":
            let snares = new Audio("./snare.mp3");
            snares.play();
            break;

        case "l":
            let crash = new Audio("./crash.mp3");
            crash.play();
            break;
        default:
            console.log(buttonPlay)
            break;
    }

}

//button click event

for (let i = 0; i < d; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonPlay = this.innerHTML
        makeSuound(buttonPlay);
        buttonAnimation(buttonPlay)
    });
    
}

//keybord press event 

document.addEventListener('keydown', function(event){
    makeSuound(event.key);
    buttonAnimation(event.key)
})

// Animation to button
function buttonAnimation(currentKey){
    let activeBtn = document.querySelector('.'+currentKey)
    activeBtn.classList.add('pressed');

    setTimeout(function (){
        activeBtn.classList.remove('pressed')
    }, 100)
}
