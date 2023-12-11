import { Router } from 'express';
import authRouter from '../routes/auth.router.js';
import userRouter from '../routes/user.router.js';

const routerApi = Router();

routerApi.use('/auth', authRouter);

routerApi.use('/user', userRouter);

export default routerApi;
