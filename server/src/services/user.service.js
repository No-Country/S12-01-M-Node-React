import userModel from "../models/user.model.js";
import {comparePassword} from "../helpers/encrypt.js";
import AppError from "../helpers/appError.js";




const loginUser = async  (email, password) => {
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new AppError('Email not found', 404);
        }
        console.log(user);
        
        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            throw new AppError('Invalid email or password', 401);
        }

        const token = generateAndSignToken(user);

        return { user: { ...user._doc, password: undefined }, token };
    } catch (error) {
        throw new AppError('Login failed', 403);
    }
};

export default loginUser;