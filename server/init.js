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
  "CREATE TABLE todolist(id INTEGER PRIMARY KEY AUTOINCREMENT, content text not null, isCheck BOOLEAN, isSaved BOOLEAN, createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP )"
);*/
