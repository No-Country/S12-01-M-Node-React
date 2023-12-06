import router from "../routes/auth.router.js";
import authRouter from "../routes/auth.router.js";
import { Router } from "express";

const routerApi = Router();

routerApi.use("/auth", authRouter);

export default routerApi;