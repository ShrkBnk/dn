import * as Express from "express";
import {
  createDbCity,
  removeDbCity,
  checkDbCity,
  getCities,
  getWeather,
} from "./controllers/weatherController";
import * as bodyParser from "body-parser";
const path = require("path");
const publicPath = path.join(__dirname, "public");
const port = process.env.PORT || 8888;
const app = Express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

const services = () => {
  app.get("/api/checkExistence/:city", checkDbCity);
  app.get("/api/getWeather/:city", getWeather);
  app.get("/api/getAllCities", getCities);

  app.post("/api/addCity", createDbCity);
  app.post("/api/removeCity", removeDbCity);
};

const appService = () => {
  app.use(Express.static("build/public"));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  });
};

const start = () => {
  services();
  appService();
};

start();

app.listen(port, () => {
  console.log(`Server is up on port: ${port}!`);
});
