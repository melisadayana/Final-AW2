import { API } from './api.js';

export const getHotels = async(id) => {    
    try {
        const res = await fetch(`${API}/hotels/xCiudad/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })        
        if(!res.ok) {
            throw new Error("No existen hoteles.")            
        } 
        const data = await res.json()
        return data;
    } catch (error) {
        console.error("Error al obtener hoteles. ", error)        
    }
}