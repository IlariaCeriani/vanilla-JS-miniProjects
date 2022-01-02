const container = document.querySelector('.brewery-container');
const form = document.querySelector('.form');
// const nameinput = document.getElementById('city-name');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let cityname = document.getElementById('city-name').value;

    if (cityname.indexOf(' ')>=0){
        cityname = cityname.split(' ').join('_');
    }

    getData(cityname)
    .then(() => {
        document.getElementById('city-name').value = '';
    })

    
    
})

async function getData(city){
    const response = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`);
    const data = await response.json();
    console.log(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
    
    let obj= data;
    obj = obj.filter((item)=> {
        if (item.website_url && item.street) {
            return item
        }
    });
    obj = obj.map((item)=> {
        if (item.longitude && item.latitude) {
            return `<article class="brewery-item">
            <h3 class="brewery-title">${item.name}</h3>
            <p class="brewery-street">${item.street}</p>
            <a href="${item.website_url}" target="_blank" class="brewery-link">${item.website_url}</a>
            <a href="http://www.google.com/maps/place/${item.latitude},${item.longitude}" target="_blank" class="brewery-map">see map</a>
            </article>`
        } 
        else {return `<article class="brewery-item">
        <h3 class="brewery-title">${item.name}</h3>
        <p class="brewery-street">${item.street}</p>
        <a href="${item.website_url}" target="_blank" class="brewery-link">${item.website_url}</a>
        </article>`}
    }).join('');
    container.innerHTML = obj;
}

