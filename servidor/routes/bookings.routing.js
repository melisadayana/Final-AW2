import {Router} from "express";
import {readFile, writeFile} from 'fs/promises';

const router = Router();

const getData = async() => {
    const file = await readFile('./servidor/data/bookings.json', 'utf-8')
    return JSON.parse(file)
}

const setData = async(nuevo) => {
    const data = await getData()
    data.push(nuevo)
    await writeFile('./servidor/data/bookings.json', JSON.stringify(data, null, 2))
}

router.put('/reservar', async (req, res) => {    
    const {
        id_city,
        id_hotel,
        persons,
        days,
        total,
        firstname,
        lastname,
        email,
        phone
    } = req.body    
    const result = await getData()
    const idNuevo = result.length + 1
    
    try{                 
        const reserva = {
            id: idNuevo,
            id_city: id_city,
            id_hotel: id_hotel,
            persons: persons,
            days: days,
            total: total,
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone
        }           
        await setData(reserva)
        res.status(201).json(reserva)        
    } catch (error) {
        const status = 500
        res.sendStatus(status)
    }
})

export default router;