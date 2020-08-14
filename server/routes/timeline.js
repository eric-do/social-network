const { Router } = require("express");
const TimelineController = require("../controllers/timeline");
const router = Router();

router.get(
  '/:handle',
  TimelineController.getTimeline,
  TimelineController.sendTimelineData
);

module.exports = router;