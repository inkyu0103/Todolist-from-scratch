import express from "express";
import cors from "cors";
import { routes } from "./routes";
import {
  getPosts,
  addPost,
  editPost,
  deletePost,
  togglePost,
} from "./controler";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// query에서 5개 처리함.
app
  .route("/todo")
  .get(async (req, res) => {
    console.log("hi");
    const result = await getPosts();
    console.log(result);
    res.status(200).send({ count: result.length, content: result });
  })
  .post((req, res) => {
    console.log("hi");
    const { content } = req.body;
    addPost(content);
    res.status(200).send({ msg: "ok" });
  });

app.delete(routes.TODO_ID, async (req, res) => {
  const { id } = req.params;
  deletePost(id);
  res.status(200).send({ msg: "ok" });
});

app.put(routes.TODO_ID, async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  editPost(content, id);
  res.status(200).send({ msg: "ok", content });
});

app.post(routes.TODO_ID, async (req, res) => {
  const { id } = req.params;
  const { isCheck } = req.body;
  togglePost(id, isCheck);
  res.status(200).send({ msg: "ok" });
});

export default app;
