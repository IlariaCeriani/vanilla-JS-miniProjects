const tabArr = [
    {
        title: 'History',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus earum quam, natus at repudiandae assumenda, excepturi suscipit ut modi itaque eos facilis veniam. Delectus eius ullam itaque est similique mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero veritatis provident praesentium consequatur. Quis commodi explicabo unde exercitationem tenetur voluptatibus.`
    },
    {
        title: 'News',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, unde id? Ab voluptatum ipsa possimus a quo deserunt facere corporis, dolores delectus, maxime quaerat accusamus blanditiis maiores ea. Atque iste nam optio eligendi dicta dolorum eaque voluptas, ullam inventore mollitia laborum voluptatem? Aut, eaque ex. Vitae culpa magni alias accusantium maiores cumque saepe aliquam optio maxime quos, sed mollitia velit quisquam consequuntur eum nulla deserunt?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi ea odio distinctio voluptas voluptate assumenda quas, at provident doloribus dolores.`
    },
    {
        title: 'Stregths',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, unde id? Ab voluptatum ipsa possimus a quo deserunt facere corporis, dolores delectus, maxime quaerat accusamus blanditiis maiores ea. Atque iste nam optio eligendi dicta dolorum eaque voluptas, ullam inventore mollitia laborum voluptatem? Aut, eaque ex. Vitae culpa magni alias accusantium maiores cumque saepe aliquam optio maxime quos, sed mollitia velit quisquam consequuntur eum nulla deserunt?`
    }
];
const tabContainer = document.querySelector('.tabs');
const txtContainer = document.getElementById('txt');

window.addEventListener('DOMContentLoaded', function() {
    let tabs = tabArr.map((item) => {
        return `<button class="tab-btn" data-id="${item.title}">${item.title}</button>`
    }).join('');
    tabContainer.innerHTML = tabs;
    
    const tabBtn = document.querySelectorAll('.tab-btn');
    const firstBtn = document.querySelector('.tab-btn');

    firstBtn.classList.add('tab-btn-focus');
    for (let i=0; i<tabArr.length; i++) {
        if (tabArr[i].title === firstBtn.dataset.id) {
            txtContainer.innerHTML = tabArr[i].content;
        }

    }

    tabBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
    
            // e.currentTarget.style.backgroundColor = 'whitesmoke';
            e.currentTarget.classList.add('tab-btn-focus');
            
            let data = e.currentTarget.dataset.id;

            for (let i=0; i<tabArr.length; i++) {
                if (tabArr[i].title === data) {
                    txtContainer.innerHTML = tabArr[i].content;
                }

            }

            
        })

        tabContainer.addEventListener('click', (e) => {
            if (btn.classList.contains('tab-btn-focus') && !btn.contains(e.target) ) {
                btn.classList.remove('tab-btn-focus');
           }
        })
        
    })
    
   
})

