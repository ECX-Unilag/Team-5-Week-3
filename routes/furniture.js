const express = require("express");
const router = express.Router();
const userController = require("../controller/furniture");
const auth = require("../middleware/auth");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });


router.post('/',  auth.authentication("user", "admin"), upload.single("image"), userController.addFurniture);
router.get('/',  auth.authentication("user", "admin"), userController.getApproved);
router.patch('/:id',  auth.authentication("admin"), userController.adminApprove);








module.exports = router;