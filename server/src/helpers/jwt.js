import jwt from 'jsonwebtoken';

import config from "../config.js"

const {JWT_EXPIRES, JWT_SECRET, COOKIE_NAME} = config;

export const generateAndSignToken = (user) => {
    const secretKey = JWT_SECRET;
    const { password, ...restData } = user;
    const payload = { ...restData };
    const options = { expiresIn: JWT_EXPIRES };

    try {
        const token = jwt.sign({ user: payload }, secretKey, options);
        return token;
    } catch (error) {
        throw new Error('Error generating token');
    }
};

export const verifyToken = (data) => {
    const secretKey = JWT_SECRET;
    const token = data.split(' ')[1];

    if (!token) {
        throw new Error('Token not provided in Authorization header');
    }

    return jwt.verify(token, secretKey);
};
