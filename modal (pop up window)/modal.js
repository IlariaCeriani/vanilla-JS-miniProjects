const openBtn = document.querySelector('.open-modal-btn');
const closeBtn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click',function() {
    modal.classList.add('show-modal');
})
closeBtn.addEventListener('click', function() {
    modal.classList.remove('show-modal');
})