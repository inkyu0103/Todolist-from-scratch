import CustomAxios from "../utils/api";
class TodoRepository {
  getTodos() {
    return CustomAxios.get("/todo");
  }

  addTodo(content: string, priority: number) {
    return CustomAxios.post("/todo", { content, priority });
  }

  toggleTodo(todoId:string,isChecked:boolean) {
    return CustomAxios.patch(`/todo/${todoId}`,{isChecked:!isChecked})
  }

  editTodo(todoId:string,content:string,priority:number) {
    return CustomAxios.put(`/todo/${todoId}`,{content,priority})
  }

  deleteTodo(todoId:string) {
    return CustomAxios.delete(`/todo/${todoId}`)
  }
}

export default new TodoRepository();
