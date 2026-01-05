import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import collection from "./mongo.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/auth")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  const data = {
    email: email,
    password: password,
    name: name,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      await collection.insertMany([data]);
      res.json("notexist");
    }
  } catch (e) {
    res.send("notexist");
  }
});

app.listen(5000, () => {
  console.log("Port connected and running on 5000");
});
