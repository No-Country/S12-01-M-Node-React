import router from '../routes/auth.router.js';
import authRouter from '../routes/auth.router.js';
import { Router } from 'express';
import eventRouter from '../routes/event.router.js';

const routerApi = Router();

routerApi.use('/events', eventRouter);
routerApi.use('/auth', authRouter);

export default routerApi;
