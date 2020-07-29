const { Router } = require("express");
const UserController = require("../controllers/user");
const router = Router();

router.post("/signup", UserController.addUser);

module.exports = router;
