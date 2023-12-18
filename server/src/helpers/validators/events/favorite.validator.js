import { param, validationResult } from 'express-validator'
import mongoose from 'mongoose';

export const saveFavoriteEventValidate = [
    param('userid')
        .notEmpty()
        .withMessage('userid is required')
        .custom((value) => {
            return mongoose.isValidObjectId(value)
        }).withMessage('userid must be an ObjectId'),
    param('eventid')
        .notEmpty()
        .withMessage('eventid is required')
        .custom((value) => {
            return mongoose.isValidObjectId(value)
        })
        .withMessage('eventid must be an ObjectId'),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(403).json({ error: errors?.array()[0]?.msg } );
        }
        return next()
    },
]
