const { Schema, model } = require("mongoose");

const TypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const TypeModel = model("Type", TypeSchema);

module.exports = {
  TypeModel,
  TypeSchema,
};
