const { body } = require('express-validator');

const paymentValidations = [
    body('user_id').isInt().withMessage('User ID must be an integer'),
    body('subscription_type').isIn(['standard', 'pro', 'exclusive']).withMessage('Invalid subscription type'),
    body('payment_method').notEmpty(),
    // body('card_details.card_number').isCreditCard().withMessage('Invalid card number').optional({ checkFalsy: true }),
    // body('card_details.valid_thru').matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/).withMessage('Invalid valid thru date').optional({ checkFalsy: true }),
    // body('card_details.cvv').isLength({ min: 3, max: 4 }).withMessage('Invalid CVV').optional({ checkFalsy: true }),
    // body('card_details.name_on_card').isString().isLength({ min: 1 }).withMessage('Name on card is required').optional({ checkFalsy: true })
]

module.exports = { paymentValidations };

