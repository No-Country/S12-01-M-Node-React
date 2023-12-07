import { Router } from 'express';
import {
    allEvents,
    eventsById,
    createEvents,
} from '../controllers/event.controllers.js';

const eventRouter = Router();

eventRouter.get('/', allEvents);

eventRouter.get('/:_id', eventsById);

eventRouter.post('/createEvents', createEvents);

export default eventRouter;
