const { Router } = require("express");
const UserController = require("../controllers/user");
const router = Router();

router.post("/signup", async (req, res) => {
  const user = req.body;
  
  try {
    await UserController.add(user);
    console.log('added user');
    res.status(201).send({message: "test"});
  } catch (e) {
    console.log('failed to add user', e);
    res.status(400).send({message: "Invalid user data"});
  }
});

module.exports = router;
