const btnRight = document.querySelector('.arrow.-right');
const btnLeft = document.querySelector('.arrow.-left');
const elements = document.querySelector('.elements');
let pixel = 100;

btnRight.addEventListener('click', function(){
    pixel = pixel + 100;
    elements.style = `transform: translateX(${pixel}px)`;
});
btnLeft.addEventListener('click', function(){
    pixel = pixel - 100;
    elements.style = `transform: translateX(${pixel}px)`
});