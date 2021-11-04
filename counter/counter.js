const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');
const number = document.getElementById('number');
let zero = 0;

decreaseBtn.addEventListener('click', function() {
    zero--;
    number.textContent = zero;
})
resetBtn.addEventListener('click', function() {
    zero = 0;
    number.textContent = zero;
})
increaseBtn.addEventListener('click', function() {
    zero++;
    number.textContent = zero;
})




// (alternativa)

// const number = document.querySelector('#number');
// const btns = document.querySelectorAll('.btn');
// let count = 0;



// il btn di questa funzione potrebbe essere sostituito con qualsiasi paceholder e verrebe applicato comunque ad ogni bottone, è solo per un legame logico che è stato scelto btn, non fa direttamente riferimento alla classe dei pulsanti.

// btns.forEach( function (btn) {
//     btn.addEventListener('click', function (e) {
//       const styles = e.currentTarget.classList;
//       if (styles.contains('decrease')) {
//           count--;
//       } else if (styles.contains('increase')) {
//           count++;
//       } else {
//           count = 0;
//       }
//       if (count>0) {
//           number.style.color = 'green';
//       }
//       if (count<0) {
//           number.style.color = 'red';
//       }
//       if (count===0) {
//           number.style.color = 'black';
//       }
//       number.textContent = count;
//     })
// })