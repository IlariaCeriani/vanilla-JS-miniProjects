const article = document.querySelector('.art');

const title = document.createDocumentFragment();


// fetch('https://animechan.vercel.app/api/random')
//     .then((response) => response.json())
//     .then((data) => {
//         let obj = data;
//         let quote = document.createElement('h2');
//         quote.innerHTML = `${obj.quote}`;
//         quote.classList.add('quote');

        
//          title.appendChild(quote);
//         //use map function on obj if there are more element in the obj you want to get
//         article.appendChild(title);
       
//     })

async function getQuote(){
    const response = await fetch('https://animechan.vercel.app/api/random');
    const data = await response.json();
    
    // let obj = data;
    let quote = document.createElement('h2');
    quote.innerHTML = `${data.quote}`;
    quote.classList.add('quote');

        
    title.appendChild(quote);
    //use map function on obj if there are more element in the obj you want to get
    article.appendChild(title);

}
getQuote()  //calling the functoion is compulsory to make it work
.then(()=>{
const quote = document.querySelector('.quote');

quote.addEventListener('click', ()=> {
    quote.classList.toggle('red');
})
})

   



