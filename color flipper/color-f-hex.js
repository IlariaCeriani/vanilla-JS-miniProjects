const COLORS = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const BTN = document.getElementById('btn');
const CODE = document.querySelector('.color');

BTN.addEventListener('click', function(){
    //add max 6 random character to colorCode, add colorCode to backgroundcolor and textcontent
    let colorCode = '#';
    for (i=0; i<6; i++) {
        colorCode += COLORS[getRandomNumber()];
    }
    document.body.style.backgroundColor = colorCode;
    CODE.textContent = colorCode;

})

function getRandomNumber() {
    return Math.floor(Math.random()*COLORS.length);
}
