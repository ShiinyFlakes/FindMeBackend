const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  kategorie: {
    type: String,
    required: true,
  },
  ort: {
    type: String,
    required: true,
  },
  personen: {
    type: Number,
    required: true,
  },
  beschreibung: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
  },
  
});

module.exports = mongoose.model("Activity", activitySchema);