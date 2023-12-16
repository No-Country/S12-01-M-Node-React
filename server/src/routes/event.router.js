import { Router } from 'express';
import passport from 'passport';
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

eventRouter.post('/createEvents',passport.authenticate('createEvents', { session: false }), createEvents);

eventRouter.put('/updateEvents/:_id',passport.authenticate('updateEvents', { session: false }),updateEvents);

eventRouter.delete('/deleteEvents/:_id',passport.authenticate('deleteEvents', { session: false }),deleteEvents);

eventRouter.get('/eventsByCategories/:categories',eventsByCategories);

eventRouter.get('/eventsByLocation/:location' , eventsByLocation);

eventRouter.get('/eventsByPrices/:price' , eventsByPrices);

export default eventRouter;
