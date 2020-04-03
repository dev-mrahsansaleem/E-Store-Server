import express from "express";

import middleWareConfig from "./config/middlewares";
import "./config/db";

import { CustomerRoutes } from "./modules";
const app = express();

middleWareConfig(app);

app.get("/", (req, res) => {
  res.send("welcome to app");
});

app.use("/api/v1/customers", CustomerRoutes);

app.listen(3000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("server listen on port 3000");
  }
});
