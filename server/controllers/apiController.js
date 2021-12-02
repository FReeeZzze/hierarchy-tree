const { CityModel, CitizenModel } = require("../models/index.js");

exports.getCities = (_req, res) => {
  try {
    CityModel.find({}).exec((err, cities) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      return res.status(200).json(cities);
    });
  } catch (e) {
    console.log(e.message);
  }
};

exports.getCitizens = (_req, res) => {
  try {
    CitizenModel.find({})
      .populate("groups")
      .exec((err, citizens) => {
        if (err) {
          return res.status(500).json({
            error: err.message,
          });
        }

        return res.status(200).json(citizens);
      });
  } catch (e) {
    console.log(e.message);
  }
};
