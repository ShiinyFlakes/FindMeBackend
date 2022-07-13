const express = require("express");
const router = express.Router();
const Activity = require("../models/Activity");
const activitysController = require("../controllers/activity-controller");

router.get("/", activitysController.getAllActivitys);
router.post("/", activitysController.addActivity);
router.get("/:id", activitysController.getById);
router.put("/:id", activitysController.updateActivity);
router.delete("/:id", activitysController.deleteActivity);

module.exports = router;
