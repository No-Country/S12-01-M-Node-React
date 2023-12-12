import authRouter from "../routes/auth.router.js";
import { Router } from "express";
import eventRouter from "./event.router.js";
import userRouter from '../routes/user.router.js';
import ticketRouter from '../routes/ticket.router.js';

const routerApi = Router();

routerApi.use('/auth', authRouter);
routerApi.use('/tickets', ticketRouter);
routerApi.use('/user', userRouter);
routerApi.use('/events', eventRouter);


export default routerApi;
