// validation/PickupValidation.js
const { body } = require('express-validator');

const pickupValidation = [
    body('unregistered_user_id').isNumeric().withMessage('User ID must be a number').notEmpty(),
    // body('pickup_status').isIn(['requested', 'completed']).withMessage('Pickup status must be either "requested" or "completed'),
    body('residence_type').isIn(['Rumah', 'Apartemen', 'Kantor', 'Kos']).withMessage('Invalid residence type'),
    // body('address').notEmpty().withMessage('Address cannot be empty'),
    body('notes').optional(),
    body('proof_of_pickup').optional().isURL().withMessage('Proof of pickup must be a valid URL'),
];


module.exports = { pickupValidation };