const express = require('express');
const router = express.Router();
const { upload } = require('../multerConfig');
const { validateRequest } = require('../helper/validateHelper');
const { pickupValidation } = require('../validation/UnregisteredPickupValidation');
const { createUnregisteredPickup, getAllUnregisteredPickups, getUnregisteredPickupById, updateUnregisteredPickup } = require('../controller/UnregisteredPickupController');

router.post('/createPickup', upload.single('proof_of_pickup'), pickupValidation, validateRequest, createUnregisteredPickup);
router.get('/getAllPickups', getAllUnregisteredPickups);
router.get('/getPickupById/:id', getUnregisteredPickupById);
router.put('/updatePickup/:id', upload.single('proof_of_pickup'), pickupValidation, validateRequest, updateUnregisteredPickup);

module.exports = router;