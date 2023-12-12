import { param, query, validationResult } from 'express-validator'
import mongoose from 'mongoose';

export const getSingleTicketValidate = [
    param('userid')
        .notEmpty()
        .withMessage('userid query is required')
        .custom((value) => {
            return mongoose.isValidObjectId(value)
        }).withMessage('userid query must be an ObjectId'),
    param('reference')
        .notEmpty()
        .withMessage('reference number is required')
        .custom((value) => {
            const regexEx = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
            return regexEx.test(value)
        })
        .withMessage('reference number must be a valid UUID format'),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(403).json({ error: errors?.array()[0]?.msg } );
        }
        return next()
    },
]