const { Schema, model } = require("mongoose");

const CitizenSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  city_id: { type: Schema.Types.ObjectId, ref: "City", require: true },
  groups: [{ type: Schema.Types.ObjectId, ref: "Group", require: true }],
});

const CitizenModel = model("Citizen", CitizenSchema);

module.exports = CitizenModel;
