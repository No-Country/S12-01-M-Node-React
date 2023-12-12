import { Router } from 'express';
import passport from 'passport';

import { register, logout } from '../controllers/auth.controllers.js';

import { loginUser } from '../services/user.service.js';

const router = Router();

router.post(
    '/register',
    passport.authenticate('register', { session: false }),
    register,
);

router.post('/login', loginUser);

router.get('/logout', logout);

export default router;
