const express = require('express');
const router = express.Router();
const { createUnregisteredUser, getAllUnregisteredUsers, getUnregisteredUserById } = require('../controller/UnregisteredUserController');
const { unregisteredUserValidation } = require('../validation/UnregisteredUserValidation');
const { validateRequest } = require('../helper/validateHelper');


router.post('/create', unregisteredUserValidation, validateRequest, createUnregisteredUser);

router.get('/getAll', getAllUnregisteredUsers);

router.get('/getById', getUnregisteredUserById);


module.exports = router;