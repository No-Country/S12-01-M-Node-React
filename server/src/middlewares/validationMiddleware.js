import { body, param, validationResult } from 'express-validator';

export const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export const registerValidation = [
    body('first_name')
        .notEmpty()
        .isLength({ max: 14, min: 3 })
        .withMessage(
            'The first name is required and must have a minimum of 3 characters and a maximum of 14 characters',
        ),
    body('last_name')
        .notEmpty()
        .isLength({ max: 14, min: 3 })
        .withMessage(
            'The last name is required and must have a minimum of 3 characters and a maximum of 14 characters',
        ),
    body('email').notEmpty().isEmail().withMessage('Invalid email format'),
    body('password')
        .notEmpty()
        .isLength({ min: 7 })
        .withMessage(
            'Password must be at least 7 characters, including an uppercase letter and a numberPassword is required',
        ),
    body('telephone')
        .notEmpty()
        .isLength({ max: 18, min: 10 })
        .withMessage(
            'The phone number is required and must be a minimum of 10 characters and a maximum of 14 characters.',
        ),
    validateFields,
];

export const loginValidation = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required'),
    validateFields,
];

export const validateParams = [
    param('_id', 'ID is not valid').isMongoId(),

    (req, res, next) => {
        validateFields(req, res, next);
    },
];
