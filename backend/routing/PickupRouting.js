// PickupRouting.js

const express = require('express');
const router = express.Router();
const {upload} = require('../multerConfig')
  
const PickupController = require('../controller/PickupController');
const { validateRequest } = require('../helper/validateHelper');
const { pickupValidation } = require("../validation/PickupValidation");


router.post('/createPickup', upload.single('proof_of_pickup'),pickupValidation, validateRequest, PickupController.createPickup);
router.get('/getAllPickups', PickupController.getAllPickups);
router.get('/getPickupById/:id', PickupController.getPickupById);
router.get('/getPickupByUserId/:id', PickupController.getPickupByUserId);
router.put('/updatePickupById/:id',upload.single('proof_of_pickup'),PickupController.updatePickup)

module.exports = router;