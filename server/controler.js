import { db } from "./init";
import { QUERY } from "./queries";

export const getPosts = () => {
  return new Promise((resolve, reject) => {
    db.all(QUERY.ALLPOSTS(), (err, rows) => {
      if (err) {
        return reject(err);
      }
      return resolve(rows);
    });
  });
};

export const getSavedPosts = async () => {};

export const addPost = (content) => {
  return db.run(QUERY.ADDPOST(content));
};
export const editPost = (content, id) => {
  return db.run(QUERY.UPDATEPOST(content, id));
};
export const togglePost = (id, toggleValue) => {
  return db.run(QUERY.TOGGLEPOST(id, toggleValue));
};
export const deletePost = (id) => {
  return db.run(QUERY.DELETEPOST(id));
};
