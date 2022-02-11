import express from "express";
import * as config from "./config";

const app = express();

app.get("/", (req, res) => {
  res.send("App is running");
});

app.listen(config.port, (error) => {
  if (error) {
    console.error("ERROR - Unable to start server.");
  } else {
    console.info(`INFO - Server started on http://localhost:${config.port}.`);
  }
});
