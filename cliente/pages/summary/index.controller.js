import { navbar } from "../../components/navbar.js"
import { addOrdenDeCompra } from './../../api/ordenDeCompra.api.js';

const btnCancel = document.getElementById('btnCancel')
const btnTravel = document.getElementById('btnTravel')

document.addEventListener('DOMContentLoaded', async()=>{
    const summary = JSON.parse(localStorage.getItem('summary'))
    const header = document.getElementById('header')
    header.innerHTML = navbar()

    //Este codigo puede variar dependiendo de como se maneje la informacion del localStorage
    document.getElementById('city').value = summary.city.city
    document.getElementById('hotel').value = summary.hotel.name
    document.getElementById('cant').value = summary.cant
    document.getElementById('days').value = summary.days
    document.getElementById('total').value = summary.total    
})

btnTravel.addEventListener('click', async () => {
    const summary = JSON.parse(localStorage.getItem('summary'))

    const body = {
        "id_city": summary.city.id,
        "id_hotel": summary.hotel.id,
        "persons": summary.cant,
        "days": summary.days,
        "total": summary.total,
        "firstname": document.getElementById('name').value,
        "lastname": document.getElementById('lastName').value,
        "email": document.getElementById('email').value,
        "phone": document.getElementById('tel').value
    }
    
    if(body !== "") {
        try {
            const response = await addOrdenDeCompra(body);
            alert('Reserva registrada correctamente.');
            localStorage.removeItem('summary')
            window.location.href = '../info'
        } catch (error) {
            alert("Error al agregar la reserva. Por favor, intenta nuevamente.")
        }      
    } else {
        alert("Por favor, ingrese sus datos.")
    }    
})

btnCancel.addEventListener('click', () => {
    localStorage.removeItem('summary')
    window.location.href = '../info'
})