import express from "express";
import citiesRouter from './servidor/routes/cities.routing.js';
import hotelsRouter from './servidor/routes/hotels.routing.js';
import bookingsRouter from './servidor/routes/bookings.routing.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static('./cliente'));

app.listen(port, () => {
    console.log(`Servidor levantado en puerto ${port}`)
});

app.use('/cities', citiesRouter);
app.use('/hotels', hotelsRouter);
app.use('/bookings', bookingsRouter);