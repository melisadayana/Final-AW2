import {Router} from "express";
import {readFile} from 'fs/promises';

const router = Router();

const getData = async() => {
    const file = await readFile('./servidor/data/hotels.json', 'utf-8')
    return JSON.parse(file)
}

router.get('/xCiudad/:id', async (req, res) => {
    const ciudad = parseInt(req.params.id)
    const data = await getData()  
    const result = data.filter(e => e.id_city === ciudad)
   
    try {
        if(result.length > 0) {
            res.status(200).json(result)
        } else {
            res.status(400).json({status:false})
        } 
    } catch (error) {
        res.send(500).json('Error al buscar hoteles.')
    }   
})

export default router;