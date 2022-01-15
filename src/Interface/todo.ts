export interface Todo {
  content: string;
  type?: string; // for action type
}

// 복잡하게 받을 필요가 있을까?
export interface AddTodoForm extends Todo {
  priority: number;
}
