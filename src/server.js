import "babel-polyfill";
// import config from "./utils/configImporter.util";
import Express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes/index.route";
import Logger from "./utils/logger.utils";
import mongoose from "mongoose";

const encodedPassword = encodeURIComponent("C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==");
mongoose.connect(`mongodb://localhost:${encodedPassword}@localhost:10255/admin?ssl=true`);


mongoose.connection.on("error", err => {
  console.log("Error connecting with db");
});
mongoose.connection.once("open", () => {
  console.log("Connection established with db");
});

const port = 3000;

const app = Express();
export const logger = Logger;

app.use(bodyParser.json());
app.use("/", routes);
app.use(Express.static("./public"));

app.listen(port, () => {
  logger.info(`App is running on port: ${port}`);
});

process.on("exit", () => {
  const date = new Date();
  logger.info(`App closed on: ${date.toUTCString()}`);
  process.exit();
});

process.on("SIGINT", () => {
  const date = new Date();
  logger.info(`App closed by user on: ${date.toUTCString()}`);
  process.exit();
});

process.on("uncaughtException", err => {
  const date = new Date();
  logger.error(`App crashed on: ${date.toUTCString()}`, err);
  process.exit();
});

process.on("unhandledRejection", err => {
  const date = new Date();
  logger.error(`App crashed on: ${date.toUTCString()}`, err);
  process.exit();
});
