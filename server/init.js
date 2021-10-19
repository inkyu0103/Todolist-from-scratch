import app from "./app";
import sqlite from "sqlite3";
sqlite.verbose();

const PORT = 8080;

app.listen(PORT, () => {
  console.log("server open ✅");
});

export const db = new sqlite.Database("todolist.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("db connected ✅");
});

// 이거 조건 어떻게 할 건지.
/*db.run(
  "CREATE TABLE todolist(id integer primary key, content text not null, isComplete bool, isSaved bool)"
);*/

/*
db.run(
  'INSERT INTO todolist(id,content,isComplete,isSaved) VALUES("12394178327483","안녕하세요테스트 메모","false","false")'
);
*/
