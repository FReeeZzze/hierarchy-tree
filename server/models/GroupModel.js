const { Schema, model } = require("mongoose");

const GroupSchema = new Schema({
  type: { type: Schema.Types.ObjectId, ref: "Type", require: true },
  name: {
    type: String,
    required: true,
  },
});

const GroupModel = model("Group", GroupSchema);

module.exports = GroupModel;
