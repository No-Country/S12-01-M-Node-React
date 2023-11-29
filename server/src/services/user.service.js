import userModel from "../models/user.model.js";
import {comparePassword} from "../helpers/encrypt.js";
import AppError from "../helpers/appError.js";
import { generateAndSignToken } from "../helpers/jwt.js";
import jwt from "jsonwebtoken"

import config from "../config.js";
const {COOKIE_NAME, JWT_SECRET} = config;


const loginUser = async  (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({ email : email});

        if (!user) {
            throw new AppError('Email not found', 404);
        }
        
        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            throw new AppError('Invalid email or password', 401);
        }

        const jwtUser = JSON.parse(JSON.stringify(user));

        const token = jwt.sign(jwtUser,JWT_SECRET, {expiresIn: "24h"})

        if (!token) {
            throw new AppError('Token undefined', 401);
        }
    
        return res
        .cookie(COOKIE_NAME, token, {httpOnly: true})
        .send({status:"success", message:"Logged in"})

    } catch (error) {
        console.log(error);
        throw new AppError('Login failed', 403);
    }
};

export default loginUser;