const { Router } = require("express");
const UserController = require("../controllers/user");
const checkUser = require("../middleware/checkUser");
const encryption = require("../middleware/encryption");
const router = Router();

router.post(
  "/signup", 
  checkUser.validateRegistrationFields,
  checkUser.rejectExistingUser,
  encryption.encryptPassword, 
  UserController.addUser
);

router.post(
  "/login", 
  checkUser.valiateLoginFields,
  checkUser.checkExistingUser,
  UserController.loginUser,
  UserController.sendUserData
);

module.exports = router;
