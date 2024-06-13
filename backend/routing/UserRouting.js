const express = require("express");
const router = express.Router();
const { register,login } = require("../controller/UserController");
const { validateRequest } = require("../helper/validateHelper");
const { registerValidations, loginValidations } = require("../validation/UserValidation");

router.post("/register", registerValidations, 
validateRequest,register);

router.post("/login", loginValidations, validateRequest, login);



module.exports = router;
