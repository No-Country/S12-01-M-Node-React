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
    eventsByPrices,
    saveFavoriteEventController
} from '../controllers/event.controllers.js';

import {
    validateCreateEvents,
    validateDeleteEvents
} from '../helpers/validators/events/eventsValidator.js'
import { saveFavoriteEventValidate } from '../helpers/validators/events/favorite.validator.js';

const eventRouter = Router();

eventRouter.get('/', allEvents);

eventRouter.get('/:_id', eventsById);

eventRouter.post('/createEvents',validateCreateEvents,passport.authenticate('jwt', { session: false }), createEvents);

eventRouter.put('/updateEvents/:_id',passport.authenticate('jwt', { session: false }),updateEvents);

eventRouter.delete('/deleteEvents/:_id',validateDeleteEvents,passport.authenticate('jwt', { session: false }),deleteEvents);

eventRouter.get('/eventsByCategories/:categories',eventsByCategories);

eventRouter.get('/eventsByLocation/:location' , eventsByLocation);

eventRouter.get('/eventsByPrices/:price' , eventsByPrices);

eventRouter.post('/:userid/save/:eventid', saveFavoriteEventValidate, passport.authenticate('jwt', { session: false }), saveFavoriteEventController);

export default eventRouter;
