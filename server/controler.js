import { db } from "./init";

export const getPosts = async () => {
  let sql = "SELECT * FROM todolist";
  const result = await db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err);
    }
    console.log("query success");
    return rows;
  });
  console.log(result, "result");
};
export const addPost = (req, res) => {};
export const deletePost = (req, res) => {};
export const updatePost = (req, res) => {};
export const checkPost = (req, res) => {};
