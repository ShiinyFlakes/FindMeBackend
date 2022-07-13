const Activity = require("../models/Activity");

const getAllActivitys = async (req, res, next) => {
  let activitys;
  try {
    activitys = await Activity.find();
  } catch (err) {
    console.log(err);
  }

  if (!activitys) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ activitys });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let activity;
  try {
    activity = await Activity.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!activity) {
    return res.status(404).json({ message: "No Activity found" });
  }
  return res.status(200).json({ activity });
};

const addActivity = async (req, res, next) => {
  const { kategorie, ort, personen, beschreibung, available } = req.body;
  let activity;
  try {
    activity = new Activity({
      kategorie,
      ort,
      personen,
      beschreibung,
      available
    });
    await activity.save();
  } catch (err) {
    console.log(err);
  }

  if (!activity) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ activity });
};

const updateActivity = async (req, res, next) => {
  const id = req.params.id;
  const { kategorie, ort, personen, beschreibung, available } = req.body;
  let activity;
  try {
    activity = await Activity.findByIdAndUpdate(id, {
      kategorie,
      ort,
      personen,
      beschreibung,
      available
    });
    activity = await activity.save();
  } catch (err) {
    console.log(err);
  }
  if (!activity) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ activity });
};

const deleteActivity = async (req, res, next) => {
  const id = req.params.id;
  let activity;
  try {
    activity = await Activity.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!activity) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Activity Successfully Deleted" });
};

exports.getAllActivitys = getAllActivitys;
exports.addActivity = addActivity;
exports.getById = getById;
exports.updateActivity = updateActivity;
exports.deleteActivity = deleteActivity;
