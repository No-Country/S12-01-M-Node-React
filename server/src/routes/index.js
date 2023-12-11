import router from "../routes/auth.router.js";
import authRouter from "../routes/auth.router.js";
import ticketRouter from "../routes/ticket.router.js";
import { Router } from "express";

const routerApi = Router();

routerApi.use("/auth", authRouter);
routerApi.use("/tickets", ticketRouter);

export default routerApi;