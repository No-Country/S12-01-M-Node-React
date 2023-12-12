import express from 'express';
import passport from 'passport';
import {
    getUsers,
    updatedUser,
    deletedUser,
} from '../controllers/user.controllers.js';

const router = express.Router();

router.get(
    '/all-users',
    passport.authenticate('jwt', { session: false }),
    getUsers,
);

router.put(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    updatedUser,
);

router.put(
    '/delete/:id',
    passport.authenticate('jwt', { session: false }),
    deletedUser,
);

export default router;
