const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const {
    signUpValidationRules,
    loginValidationRules,
    validation
} = require("../middleware/validation")
const auth = require("../middleware/auth");


router.post('/signup', signUpValidationRules(), validation, userController.signUp);
router.post('/login', loginValidationRules(), validation, userController.logIn);
router.patch('/editprofile', auth.authentication("user", "admin"), userController.updateProfile);




module.exports = router;