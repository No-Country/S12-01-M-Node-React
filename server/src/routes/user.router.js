import express from 'express';
import passport from 'passport';
import getUsers from '../services/user.service.js';
import updateUser from '../services/user.service.js';
import deleteUser from '../services/user.service.js';

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), getUsers);

router.put(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    updateUser,
);

router.put(
    '/delete/:id',
    passport.authenticate('jwt', { session: false }),
    deleteUser,
);

export default router;
