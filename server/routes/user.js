const { Router } = require("express");
const UserController = require("../controllers/user");
const { encryptPassword } = require("../middleware/encryption");
const router = Router();

router.post("/signup", encryptPassword, UserController.addUser);

module.exports = router;
