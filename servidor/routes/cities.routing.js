import {Router} from "express";
import {readFile} from 'fs/promises';

const router = Router();

const getData = async() => {
    const file = await readFile('./servidor/data/cities.json', 'utf-8')
    return JSON.parse(file)
}

router.get('/', async (req, res) => {
    const result = await getData()  
    
    try {
        if(result) {
            res.status(200).json(result)
         }else {
            res.status(400).json({status:false})
        } 
    } catch (error) {
        res.send(500).json('Error al buscar ciudades.')
    }   
})

export default router;