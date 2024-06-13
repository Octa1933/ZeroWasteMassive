const db = require('../database/connection');
const { statusCodes } = require('../helper/statusCodeHelper');
const {createResponse} = require('../helper/responseHelper')

async function makePayment(req, res) {
    const { user_id, subscription_type, payment_method, card_details } = req.body;
    try {
        let paymentData = {
            user_id: user_id || null, 
            subscription_type: subscription_type || null,
            payment_method: payment_method || null
        };

        if (payment_method === 'creditDebitCard') {
            const { card_number, valid_thru, cvv,name_on_card } = card_details || {};
            if (!card_number || !valid_thru || !cvv || !name_on_card) {
                return res.status(statusCodes.BAD_REQUEST).json(createResponse(statusCodes.BAD_REQUEST, 'Card details are required for credit/debit card payment'));
            }
            paymentData = {
                ...paymentData,
                card_number: card_number || null,
                valid_thru: valid_thru || null,
                cvv: cvv || null,
                name_on_card: name_on_card || null
            };
        }

        const columns = Object.keys(paymentData).join(', ');
        const placeholders = Object.keys(paymentData).map(() => '?').join(', ');
        const values = Object.values(paymentData);

        const result = await db.query(`INSERT INTO payments (${columns}) VALUES (${placeholders})`, values);
        res.status(statusCodes.CREATED).json(createResponse(statusCodes.CREATED, 'Payment successful' , {id : result.insertId }));
    } catch (error) {
        console.error('Payment error:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to process payment'));
    }
}

async function getAllPayments(req, res) {
    try {
        const rows = await db.query('SELECT * FROM payments');
        res.json(createResponse(statusCodes.OK,'Success', rows));
        
    } catch (error) {
        console.error('Error fetching payments:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to retrieve payments'));
    }
}

async function getPaymentById(req, res) {
    const { id } = req.params;
    try {
        const rows = await db.query('SELECT * FROM payments WHERE id = ?', [id]);
        if (rows.length > 0) {
            res.json(createResponse(statusCodes.OK,'Success', rows));
        } else {
            res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'Payment not found'));
        }
    } catch (error) {
        console.error('Error fetching payment:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to retrieve payment'));
    }
}

async function getPaymentByUserId(req, res) {
    const { id } = req.params;
    try {
        const rows = await db.query('SELECT * FROM payments WHERE user_id = ?', [id]);
        if (rows.length > 0) {
            res.json(createResponse(statusCodes.OK,'Success', rows));
        } else {
            res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'Payment not found'));
        }
    } catch (error) {
        console.error('Error fetching payment:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to retrieve payment'));
    }
}

async function updatePayment(req, res) {
    const { user_id, subscription_type, payment_method, card_details } = req.body;
    const { id } = req.params;
    try {
        const existingPayment = await db.query('SELECT * FROM payments WHERE id = ? AND user_id = ?', [id, user_id]);
        
        if (existingPayment.length > 0) {
            let paymentData = {
                user_id: user_id || null,
                subscription_type: subscription_type || null,
                payment_method: payment_method || null
            };

            if (payment_method === 'credit_debit_card') {
                const { card_number, valid_thru, cvv, name_on_card } = card_details || {};
                paymentData = {
                    ...paymentData,
                    card_number: card_number || null,
                    valid_thru: valid_thru || null,
                    cvv: cvv || null,
                    name_on_card: name_on_card || null
                };
            }

            const updateValues = Object.keys(paymentData).map(key => `${key} = ?`).join(', ');
            const updateParams = Object.values(paymentData);
            updateParams.push(id);

            const query = `UPDATE payments SET ${updateValues} WHERE id = ?`;
            await db.query(query, updateParams);
            
            res.json(createResponse(statusCodes.OK, 'Payment updated successfully'));
        } else {
            res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'Payment not found', {id : result.insertId }));
        }
    } catch (error) {
        console.error('Error updating payment:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to update payment'));
    }
}

const deletePayment = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM payments WHERE id = ?', [id]);
        if (result.affectedRows > 0) {
            res.json(createResponse(statusCodes.OK, 'Payment deleted successfully'));
        } else {
            res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'Payment not found',));
        }
    } catch (error) {
        console.error('Error deleting payment:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to delete payment'));
    }
};


module.exports = { makePayment, getAllPayments, getPaymentById, updatePayment , deletePayment, getPaymentByUserId};
