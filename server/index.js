const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
// Настройки сервера
const PORT = config.get("Tree.port");
const mongoUri = config.get("Tree.dbConfig.mongoUri");
const database = config.get("Tree.dbConfig.database");

// middleware
const { header } = require("./middleware");
const router = require("./routes");
const app = express();

app.use(header);
app.use("/api", router);

const MainApp = () => {
  try {
    mongoose.connect(
      `${mongoUri}/${database}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          throw Error(err);
        } else console.log(`Подключен к базе Mongodb: ${database}`);
      }
    );

    app.listen(PORT, () => {
      console.log(`> Сервер стартовал на порту: ${PORT}`);
    });

    app.use((_req, res) => {
      res.status(404).send({
        message: "Not Found",
      });
    });
  } catch (err) {
    console.error("Main err: ", [err.message]);
    return 1;
  }
};

MainApp();
