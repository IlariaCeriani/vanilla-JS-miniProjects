let reviews = [
    {
        id: 1,
        img: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
        name: 'Sarah Parker',
        job: 'UI DEVELOPER',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias amet enim suscipit, sit recusandae odio incidunt nisi. Unde, iste esse omnis, accusantium veniam quidem consequatur nisi, odio aspernatur odit velit?'
    },
    {
        id: 2,
        img: 'https://st3.depositphotos.com/9881890/i/600/depositphotos_163785870-stock-photo-blonde-smiling-businesswoman.jpg',
        name: 'Olivia Wild',
        job: 'ENTREPRENEUR',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias amet enim suscipit, sit recusandae odio incidunt nisi. Unde, iste esse omnis.'
    },
    {
        id: 3,
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
        name: 'Bob The Builder',
        job: 'UI DEVELOPER',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias amet enim suscipit, sit recusandae odio incidunt nisi. Unde, iste esse omnis, accusantium veniam quidem consequatur nisi, odio aspernatur odit velit? cat dog bacone gg and whatever feels nice to add to this magnificent review xdxd'
    },
    {
        id: 4,
        img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg',
        name: 'George Bush',
        job: 'UI DEVELOPER',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias amet enim suscipit, sit recusandae odio incidunt nisi. Unde, iste esse omnis, accusantium veniam quidem consequatur nisi.'
    }
];
let reviewID = 0;
const img = document.getElementById('img');
const author = document.getElementById('name');
const job = document.getElementById('job');
const text = document.getElementById('text');

const previousBtn = document.querySelector('#previous-btn');
const nextBtn = document.querySelector('#next-btn');
const randomBtn = document.querySelector('#random-btn');

window.addEventListener('DOMContentLoaded', function() {
    getReviewData(reviewID);
})

function getReviewData(bananas){
    const item = reviews[bananas];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

previousBtn.addEventListener('click', function() {
   if (reviewID > 0) {
       reviewID--;
       getReviewData(reviewID);
   } else {
      reviewID = reviews.length-1;
      getReviewData(reviewID);
   }

})

nextBtn.addEventListener('click', function() {
    if (reviewID<reviews.length-1) {
        reviewID++;
        getReviewData(reviewID);
    } else {
        reviewID = 0;
        getReviewData(reviewID);
    }
    

})

randomBtn.addEventListener('click', function() {
    getReviewData(randomNumberFunction());
})

function randomNumberFunction() {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    return randomNumber;
}