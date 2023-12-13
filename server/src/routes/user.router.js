import express from 'express';
import passport from 'passport';
import {
    getUsers,
    updatedUser,
    deletedUser,
} from '../controllers/user.controllers.js';
import { validateParams } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.get(
    '/all-users',
    passport.authenticate('jwt', { session: false }),
    getUsers,
);

router.put(
    '/:_id',
    validateParams,
    passport.authenticate('jwt', { session: false }),
    updatedUser,
);

router.put(
    '/delete/:_id',
    validateParams,
    passport.authenticate('jwt', { session: false }),
    deletedUser,
);

export default router;
