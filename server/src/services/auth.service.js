import userModel from "../models/user.model.js";
import AppError from "../helpers/appError.js";
import generateAndSignToken from "../helpers/jwt.js";
import encryptPassword from "../helpers/encrypt.js";

import passport from "passport";

import local from "passport-local"

const LocalStrategy = local.Strategy;

const initializePassport = ( ) =>{
    passport.use(
        "register",
        new LocalStrategy ({passReqToCallback: true, usernameField : "email"}), async (req, username, password, done) => {
            try {
                
                const {first_name, last_name,email,password, telephone, role } = req.body;
                
                let user = await userModel.findOne({email: username});
                
                let hashedPassword = await encryptPassword(password)

                const existingUser = await userModel.findOne({ email });
                if (existingUser) {
                    throw new AppError('Email already in use', 400);
                }

                const newUser = {
                    first_name,
                    last_name,
                    email,
                    telephone,
                    role,
                    password : hashedPassword
                }

                const result = await userModel.create(newUser);

                if (!newUser._id) {
                    throw new AppError('Failed to create user', 500);
                }

                const token = generateAndSignToken(newUser);
                
                return {...newUser._doc,  password: undefined, token: token}
            } catch (error) {
                throw new Error("Register fail", 400);
            }
        }
    )

    passport.serializeUser((user, done) => {
        done(null, user._id);
    }); 

    passport.deserializeUser(async (id, done) => {
        let user = await userModel.findById(id);
        done(null, user);
    });

}

export default initializePassport; 







