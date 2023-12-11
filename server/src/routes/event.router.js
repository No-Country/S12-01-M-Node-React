import { Router } from 'express';
import {
    allEvents,
    eventsById,
    createEvents,
    updateEvents,
    deleteEvents
} from '../controllers/event.controllers.js';

const eventRouter = Router();

eventRouter.get('/', allEvents);

eventRouter.get('/:_id', eventsById);

eventRouter.post('/createEvents', createEvents);

eventRouter.put('/updateEvents',updateEvents);

eventRouter.delete('/deleteEvents',deleteEvents);

export default eventRouter;
