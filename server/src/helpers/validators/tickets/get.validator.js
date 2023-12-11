import { param, validationResult } from 'express-validator'
import mongoose from 'mongoose';

export const getTicketValidate = [
    param('userid')
        .notEmpty()
        .withMessage('userid query is required')
        .custom((value) => {
            return mongoose.isValidObjectId(value)
        }).withMessage('userid query must be an ObjectId'),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(403).json({ error: errors?.array()[0]?.msg } );
        }
        return next()
    },
]
