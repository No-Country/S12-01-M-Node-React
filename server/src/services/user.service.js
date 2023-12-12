import userModel from '../models/user.model.js';
import { comparePassword } from '../helpers/encrypt.js';
import AppError from '../helpers/appError.js';
import jwt from 'jsonwebtoken';
import { UserDTO } from '../utils/user.dto.js';

import config from '../config.js';
const { COOKIE_NAME, JWT_SECRET } = config;

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });

        if (!user) {
            throw new AppError('Email not found', 404);
        }

        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            throw new AppError('Invalid email or password', 401);
        }

        const userDto = new UserDTO(user);

        const jwtUser = JSON.parse(JSON.stringify(userDto));

        const token = jwt.sign(jwtUser, JWT_SECRET, { expiresIn: '24h' });

        if (!token) {
            throw new AppError('Token undefined', 401);
        }

        return res.cookie(COOKIE_NAME, token, { httpOnly: true }).send({
            status: 'success',
            message: 'Logged in',
            payload: userDto,
        });
    } catch (error) {
        console.log(error);
        throw new AppError('Login failed', 403);
    }
};

export const getAllUsers = async () => {
    try {
        const users = await userModel.find({ isActive: true });

        if (!users) {
            throw new AppError('No users found', 404);
        }

        return users;
    } catch (error) {
        throw new AppError(`Error getting users: ${error.message}`, 500);
    }
};

export const updateUser = async (userId, updatedUserData) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $set: updatedUserData },
            { new: true },
        );

        if (!updatedUser) {
            throw new AppError('No user with that ID', 404);
        }

        return updatedUser;
    } catch (error) {
        throw new AppError(`Error updating user: ${error.message}`, 500);
    }
};

export const deleteUser = async (userId) => {
    try {
        const deactivatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $set: { isActive: false } },
            { new: true },
        );

        if (!deactivatedUser) {
            throw new AppError('User not found', 404);
        }

        return deactivatedUser;
    } catch (error) {
        throw new AppError(`Error deactivating user: ${error.message}`, 500);
    }
};
