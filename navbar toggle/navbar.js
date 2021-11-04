const menuBtn = document.getElementById('menu-btn');
const links = document.getElementById('links');

menuBtn.addEventListener('click', function() {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');
    // }

    links.classList.toggle('show-links');
})