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

app
  .route("/todo")
  .get(async (req, res) => {
    const result = await getPosts();
    res.send({ count: result.length, todoList: result });
  })
  .post((req, res) => {
    const { content } = req.body;
    console.log(content);
    addPost(content);
    res.send({ msg: "ok" });
  });

app.delete(routes.TODO_CHECK, async (req, res) => {
  const { id } = req.params;
  deletePost(id);
  const result = await getPosts();
  res.send({ count: result.length, todoList: result });
});

app.put(routes.TODO_CHECK, async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  console.log(id, content);
  editPost(content, id);
  const result = await getPosts();
  res.send({ count: result.length, todoList: result });
});

app.post(routes.TODO_CHECK, async (req, res) => {
  const { id } = req.params;
  const { isCheck } = req.body;
  togglePost(id, isCheck);
  const result = await getPosts();
  res.send({ count: result.length, todoList: result });
});

export default app;
