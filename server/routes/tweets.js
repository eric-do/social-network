const { Router } = require('express');
const router = Router();
const { getTweetsByHandle } = require('../../database/tweet');


router.get('/user_timeline', async (req, res) => {
  const { handle } = req.query;

  try {
    const tweets = await getTweetsByHandle(handle);
    console.log(tweets);
    res.send(tweets);
  } catch (e) {
    res.status(400).send()
  }
});

module.exports = router;