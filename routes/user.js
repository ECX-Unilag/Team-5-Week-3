const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const {
    signUpValidationRules,
    loginValidationRules,
    validation
} = require("../middleware/validation")
const auth = require("../middleware/auth");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });


router.post('/signup', signUpValidationRules(), validation, userController.signUp);
router.post('/login', loginValidationRules(), validation, userController.logIn);
router.get('/profile', auth.authentication("user", "admin"), userController.getProfileData);
router.patch('/editprofile', auth.authentication("user", "admin"), userController.updateProfile);
router.patch('/image', auth.authentication("user", "admin"), upload.single("image"), userController.imageUpload);




module.exports = router;