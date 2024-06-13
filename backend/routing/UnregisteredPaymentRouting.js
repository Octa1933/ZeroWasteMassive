const express = require("express");
const router = express.Router();
const { validateRequest } = require('../helper/validateHelper');
const { makeUnregisteredPayment, getAllUnregisteredPayments, getUnregisteredPaymentById, updateUnregisteredPayment, deleteUnregisteredPayment } = require('../controller/UnregisteredPaymentController');
const { paymentValidations } = require("../validation/UnregisteredPaymentValidation");

router.post('/makePayment', paymentValidations, validateRequest, makeUnregisteredPayment);
router.get('/getAllPayments', getAllUnregisteredPayments);
router.get('/getPaymentById/:id', getUnregisteredPaymentById);
router.put('/updatePayment/:id', paymentValidations, validateRequest, updateUnregisteredPayment);
router.delete('/deletePayment/:id', deleteUnregisteredPayment);

module.exports = router;