const db = require('../database/connection');
const { statusCodes } = require('../helper/statusCodeHelper');
const { createResponse } = require('../helper/responseHelper');

async function makeUnregisteredPayment(req, res) {
    const { unregistered_user_id, subscription_type, payment_method, card_details } = req.body;
    try {
        let paymentData = {
            unregistered_user_id: unregistered_user_id || null,
            subscription_type: subscription_type || null,
            payment_method: payment_method || null
        };

        if (payment_method === 'credit_debit_card') {
            const { card_number, valid_thru, cvv, name_on_card } = card_details || {};
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

         await db.query(`INSERT INTO unregistered_payments (${columns}) VALUES (${placeholders})`, values);
        res.status(statusCodes.CREATED).json(createResponse(statusCodes.CREATED, 'Payment successful'));
    } catch (error) {
        console.error('Payment error:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to process payment'));
    }
}

async function getAllUnregisteredPayments(req, res) {
    try {
        const rows = await db.query('SELECT * FROM unregistered_payments');
        res.json(createResponse(statusCodes.OK, 'Success', rows));
    } catch (error) {
        console.error('Error fetching unregistered payments:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to retrieve unregistered payments'));
    }
}

async function getUnregisteredPaymentById(req, res) {
    const { id } = req.params;
    try {
        const rows = await db.query('SELECT * FROM unregistered_payments WHERE id = ?', [id]);
        if (rows.length > 0) {
            res.json(createResponse(statusCodes.OK, 'Success', rows));
        } else {
            res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'Payment not found'));
        }
    } catch (error) {
        console.error('Error fetching unregistered payment:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to retrieve unregistered payment'));
    }
}

async function updateUnregisteredPayment(req, res) {
    const { unregistered_user_id, subscription_type, payment_method, card_details } = req.body;
    const { id } = req.params;
    try {
        const existingPayment = await db.query('SELECT * FROM unregistered_payments WHERE id = ?', [id]);

        if (existingPayment.length > 0) {
            let paymentData = {
                unregistered_user_id: unregistered_user_id || null,
                subscription_type: subscription_type || null,
                payment_method: payment_method || null
            };

            if (payment_method === 'credit_debit_card') {
                const { card_number, valid_thru, cvv, name_on_card } = card_details || {};
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

            const updateValues = Object.keys(paymentData).map(key => `${key} = ?`).join(', ');
            const updateParams = Object.values(paymentData);
            updateParams.push(id);

            const query = `UPDATE unregistered_payments SET ${updateValues} WHERE id = ?`;
            await db.query(query, updateParams);

            res.json(createResponse(statusCodes.OK, 'Payment updated successfully'));
        } else {
            res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'Payment not found'));
        }
    } catch (error) {
        console.error('Error updating unregistered payment:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to update unregistered payment'));
    }
}

const deleteUnregisteredPayment = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM unregistered_payments WHERE id = ?', [id]);
        if (result.affectedRows > 0) {
            res.json(createResponse(statusCodes.OK, 'Payment deleted successfully'));
        } else {
            res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'Payment not found'));
        }
    } catch (error) {
        console.error('Error deleting unregistered payment:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to delete unregistered payment'));
    }
};

module.exports = { makeUnregisteredPayment, getAllUnregisteredPayments, getUnregisteredPaymentById, updateUnregisteredPayment, deleteUnregisteredPayment };