export const QUERY = {
  ALLPOSTS: () => `SELECT * FROM todolist ORDER BY id desc `,
  ADDPOST: (content) =>
    `INSERT INTO todolist (content,isCheck,isSaved) VALUES("${content}",${false},${false})`,

  ADDITIONALPOST: (current) =>
    `SELECT * FROM todolist ORDER BY id desc LIMIT ${current},5`,

  UPDATEPOST: (content, id) =>
    `UPDATE todolist SET content = "${content}" WHERE id = ${id}`,
  DELETEPOST: (id) => `DELETE FROM todolist WHERE id = ${id}`,

  // 뭔가 이상하다.
  TOGGLEPOST: (id, toggleValue) =>
    `UPDATE todolist SET isCheck = ${!toggleValue} WHERE id = ${id}`,
};
