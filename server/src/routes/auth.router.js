import {Router} from "express";
import passport from "passport";

import { loginUsers, register } from "../controllers/auth.controllers.js";


const router = Router();


router.post("/register", passport.authenticate("register", {session: false}), register)


router.post("/login", loginUser);

export default router;



