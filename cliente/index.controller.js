import { card } from './components/card.js'
import { navbar } from './components/navbar.js'
import { getCities } from './api/ciudades.api.js';

const cardContainer = document.getElementById('cardContainer')
const header = document.getElementById('header')

header.innerHTML = navbar()
document.addEventListener('DOMContentLoaded', async()=>{
  
    const data = await getCities() //Deberia ser un array de objetos con la informacion de las ciudades
    cardContainer.innerHTML = ''

    data.forEach((place) => {
        cardContainer.innerHTML += card(place.city, place.description, place.price, place.id, place.image)
    })

    const btnCity = document.getElementsByName('btnCity')
    Array.from(btnCity).forEach(button => {
        button.addEventListener('click', (e) => {
            const city = JSON.parse(e.target.dataset.city)
            localStorage.setItem('selectedCity', JSON.stringify(city))
            window.location.href = './pages/info'
        })
    })
})