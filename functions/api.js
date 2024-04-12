const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const serverLess = require("serverless-http");
require("dotenv").config();
require("../crone-jobs/croneJobs");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ code: 200, message: "Service app for Netlify is running..." });
});

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverLess(app);
