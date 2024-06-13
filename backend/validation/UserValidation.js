const { body } = require('express-validator');

const registerValidations = [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('name').notEmpty().withMessage('Name is required'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
]

const loginValidations = [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').notEmpty().withMessage('The password cannot be empty')
]

module.exports = { registerValidations, loginValidations };


