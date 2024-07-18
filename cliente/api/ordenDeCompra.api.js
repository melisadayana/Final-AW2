import { API } from './api.js';

export const addOrdenDeCompra = async (body) => {
    try {
        const res = await fetch(`${API}/bookings/reservar`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })  
        console.log(res)      
        if(!res.ok) {
            throw new Error("No se pudo registrar la reserva.")            
        } 
        const data = await res.json()
        return data;
    } catch (error) {
        console.error("Error al registrar la reserva. ", error)
    }
}