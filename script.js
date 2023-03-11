const cont = document.querySelector('.container')

function fetchApiData() {
    const url = 'https://fakestoreapi.com/products'
    fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data.data);
            createCards(data)
        })
}

fetchApiData();
function createCards(data) {
  data.forEach((item)=>{
    const div = document.createElement('div')
    div.classList.add('card')
    const div2 = document.createElement('div')
    div.classList.add('desc')
    const img = document.createElement('img')
    img.src = item.image
    const info=document.createElement('p')
    info.innerHTML=item.category;
    const rate=document.createElement('h6')
    rate.innerHTML='Ratings: '+item.rating.rate+'  ('+item.rating.count+' reviews)';
    const heading = document.createElement('h5')
    heading.innerHTML = item.title;
    const price=document.createElement('h3')
    price.innerHTML='₹ '+item.price;
    price.setAttribute('class','price')
    img.setAttribute('class','img')
    info.setAttribute('class','info')
    heading.setAttribute('class','heading')
    rate.setAttribute('class','rate')
  
    div.appendChild(info)
    div.appendChild(img)
    div.appendChild(heading)
    div.appendChild(price)
    div.appendChild(rate)
    div.appendChild(div2)
    cont.appendChild(div)
  })
}
