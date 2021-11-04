const COLORS =['green', 'red', '#cc33ff', 'rgb(255, 255, 51)'];
const BTN = document.getElementById('btn');
const CODE = document.querySelector('.color');
BTN.addEventListener('click', function() {
    //get random number between 0 and 4
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = COLORS[randomNumber];
    CODE.textContent= COLORS[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random()*COLORS.length);
}
