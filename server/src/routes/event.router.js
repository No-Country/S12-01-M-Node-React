import { Router } from 'express';
import {
    allEvents,
    eventsById,
    createEvents,
    updateEvents,
    deleteEvents,
    eventsByCategories,
    eventsByLocation,
    eventsByPrices
} from '../controllers/event.controllers.js';

const eventRouter = Router();

eventRouter.get('/', allEvents);

eventRouter.get('/:_id', eventsById);

eventRouter.post('/createEvents', createEvents);

eventRouter.put('/updateEvents/:_id',updateEvents);

eventRouter.delete('/deleteEvents/:_id',deleteEvents);

eventRouter.get('/eventsByCategories/:categories',eventsByCategories);

eventRouter.get('/eventsByLocation/:location' , eventsByLocation);

eventRouter.get('/eventsByPrices/:price' , eventsByPrices);

export default eventRouter;
