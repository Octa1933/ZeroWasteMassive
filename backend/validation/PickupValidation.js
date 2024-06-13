const { body } = require('express-validator');

const pickupValidation = [
    body('user_id').isNumeric().withMessage('User ID must be a number').notEmpty(),
    body('notes').optional(),
    body('proof_of_pickup').optional().isURL().withMessage('Proof of pickup must be a valid URL'),
];

module.exports = { pickupValidation };