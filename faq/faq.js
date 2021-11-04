
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement;
        btns.forEach(function(item) {
            if(item.parentElement !== question && item.parentElement.classList.contains('text-show')) {
                item.parentElement.classList.remove('text-show');
            }
        })
        question.classList.toggle('text-show');
    })
})

// const question = document.querySelectorAll('.question');


// question.forEach(function(question) {
//     const btn = document.querySelector('.btn');
//     btn.addEventListener('click', function() {
//         question.forEach(function(item) {
//           if (item !== question) {
//               question.classList.remove('text-show');
//           }
//         })
//         question.classList.toggle('text-show');
//     })
    
// })
