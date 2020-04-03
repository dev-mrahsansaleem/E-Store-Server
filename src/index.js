import express from "express";

import middleWareConfig from "./config/middlewares";
import "./config/db";

const app = express();

middleWareConfig(app);

app.get("/", (req, res) => {
  res.send("welcome to app");
});

app.listen(3000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("server listen on port 3000");
  }
});
