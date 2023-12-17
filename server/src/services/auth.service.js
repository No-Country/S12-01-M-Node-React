import passport from "passport";
import userModel from "../models/user.model.js";
import jwt from "passport-jwt"
import local from "passport-local"
import AppError from "../helpers/appError.js";
import {encryptPassword} from "../helpers/encrypt.js";
import config from "../config.js";
import { registerMail, transporter } from "../utils/nodemailer.js";

const { JWT_SECRET, COOKIE_NAME} = config;

const LocalStrategy = local.Strategy;

const JwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt; // jwt tiene una opcion extractjwt para extraer el jwt

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies){
        token = req.cookies[COOKIE_NAME]
    }
    return token;
}

const jwtOptions = {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
} 

const initializePassport = ( ) =>{
    passport.use(
        "register",
        new LocalStrategy ({passReqToCallback: true, usernameField : "email"}, async (req, username, password, done) => {
            try {
                
                const {first_name, last_name,email, telephone, role } = req.body;
                
                let user = await userModel.findOne({email: username});
                
                if (user) {
                    throw new AppError('Email already in use', 400);
                } 

                const newUser = {
                    first_name,
                    last_name,
                    email,
                    telephone,
                    role,
                    password : await encryptPassword(password)
                }

                const result = await userModel.create(newUser);

                if (!result) {
                    throw new AppError('Failed to create user', 500);
                } 
                await transporter.sendMail(registerMail(result.email, result.first_name));
                return done(null, result);
                
            } catch (error) {
                console.log(error);
                throw new Error(error);
            }
        }
    ));

    passport.use(
        'jwt', 
        new JwtStrategy(jwtOptions, async (jwt_payload,done) =>{
        try {
            return done(null, jwt_payload)
        } catch (error) {
            return done(error);
        }
    })
    );

    passport.serializeUser((user, done) => {
        done(null, user._id);
    }); 

    passport.deserializeUser(async (id, done) => {
        let user = await userModel.findById(id);
        done(null, user);
    });

}

export default initializePassport; 







