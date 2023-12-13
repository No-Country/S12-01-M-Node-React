import { Router } from 'express';
import passport from 'passport';

import { register, logout } from '../controllers/auth.controllers.js';

import { loginUser } from '../services/user.service.js';
import {
    loginValidation,
    registerValidation,
} from '../middlewares/validationMiddleware.js';

const router = Router();

router.post(
    '/register',
    registerValidation,
    passport.authenticate('register', { session: false }),
    register,
);

router.post('/login', loginValidation, loginUser);

router.get('/logout', logout);

export default router;
