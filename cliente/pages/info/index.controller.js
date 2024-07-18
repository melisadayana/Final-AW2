import { navbar } from '../../components/navbar.js'
import { getCities } from './../../api/ciudades.api.js';
import { getHotels } from './../../api/hotel.api.js';

const header = document.getElementById('header')
header.innerHTML = navbar()

const btn = document.getElementById('btnTravel')
const totalP = document.getElementById('total')
const hotelSelect = document.getElementById('hotel')
const inputCant = document.getElementById('cant')
const inputDays = document.getElementById('days')
const selectedCity = JSON.parse(localStorage.getItem('selectedCity'))
let city = []
let hotel = []
let hotels = []

const getTotal = () => {
    const cant = inputCant.value 
    const days = inputDays.value 
    const selectedHotel = hotels.find(hotel => hotel.name === hotelSelect.value)
    hotel = selectedHotel
    totalP.textContent = `$${cant * days * selectedHotel.price + city.price}`
}

btn.addEventListener('click', () => {
    const data = {
        city: city,
        hotel: hotel,
        cant: inputCant.value,
        days: inputDays.value,
        total: totalP.textContent
    }
    localStorage.setItem('summary', JSON.stringify(data))
    window.location.href = '../summary/'
})

document.addEventListener('DOMContentLoaded', async()=>{
   
    const data = await getCities(); //Deberia ser un array de objetos con la informacion de las ciudades
 
    city = data.find(city => city.id === selectedCity) //Este codigo puede variar dependiendo de como se obtenga la ciudad seleccionada
    totalP.textContent = `$${city.price}`
    document.getElementById('title').textContent = `Calcula tu viaje a ${city.city}`
    document.getElementById('img').src = city.image
    document.getElementById('desc').textContent = city.description

    let options = ``
    hotels = await getHotels(city.id)

    hotels.forEach(option => {
        options += `<option>${option.name}</option>`
    })

    hotelSelect.innerHTML = options
})

inputCant.addEventListener('input', () => {
    getTotal()
})

inputDays.addEventListener('input', () => {
    getTotal()
})

hotelSelect.addEventListener('change', () => {
    getTotal()
})