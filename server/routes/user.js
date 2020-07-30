const { Router } = require("express");
const UserController = require("../controllers/user");
const checkUser = require("../middleware/checkUser");
const encryption = require("../middleware/encryption");
const router = Router();

router.post(
  "/signup", 
  encryption.encryptPassword, 
  UserController.addUser
);

module.exports = router;
