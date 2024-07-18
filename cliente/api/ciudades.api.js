import { API } from './api.js';

export const getCities = async() => {
    try {
        const res = await fetch(`${API}/cities`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })        
        if(!res.ok) {
            throw new Error("No existen ciudades.")            
        } 
        const data = await res.json()
        return data;
    } catch (error) {
        console.error("Error al obtener ciudades. ", error)        
    }
}