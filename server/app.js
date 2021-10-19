import express from "express";
import cors from "cors";
import { getPosts } from "./controler";
const app = express();
const ROUTE = "/todo";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get(ROUTE, async (req, res) => {
  console.log("hi");
  await getPosts();

  res.send({ name: "inkyu" });
});

app.post(ROUTE, (req, res) => {});
app.put(ROUTE, (req, res) => {});
app.delete(ROUTE, (req, res) => {});

export default app;
