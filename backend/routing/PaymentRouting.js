const express = require("express");
const router = express.Router();
const {validateRequest} = require('../helper/validateHelper');
const {makePayment, getAllPayments, getPaymentById, updatePayment, deletePayment, getPaymentByUserId} = require('../controller/PaymentController');
const { paymentValidations } = require("../validation/PaymentValidation");

router.post('/makePayment', paymentValidations, validateRequest, makePayment);
router.get('/getAllPayments', getAllPayments);
router.get('/getPaymentById/:id', getPaymentById);
router.get('/getPaymentByUserId/:id', getPaymentByUserId);
router.put('/updatePayment/:id',paymentValidations, validateRequest, updatePayment);
router.delete('/deletePayment/:id', deletePayment)


module.exports = router;

