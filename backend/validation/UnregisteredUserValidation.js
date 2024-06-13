const { body } = require('express-validator');

const unregisteredUserValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('phone_number').notEmpty().withMessage('Phone number is required'),
    body('address').notEmpty().withMessage('Address is required'),
    body('email').isEmail().withMessage('Invalid email format'),
];

module.exports = { unregisteredUserValidation };