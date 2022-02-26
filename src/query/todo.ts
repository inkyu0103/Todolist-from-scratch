import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router";
import TodoRepository from "../Repository/TodoRepository";

export const useGetTodosQuery = () => {
  return useQuery<any>("getTodos", TodoRepository.getTodos);
};

// mutate는, useMutation에서 mutate라는 객체를 받아서, variable로 서버의 상태를 바꿀 대상을 넘기는구나
// useMutation의 type은 어떻게 정해야할까?
// 어떤게 더 좋은 구조일까? useHistory 내부에서 관찰?
export const useAddTodoMutation = () => {
  const history = useHistory();
  // destructure 하지 않으면 오류가 발생하는 이유는 뭘까?
  return useMutation(
    ({ content, priority }: { content: string; priority: number }) =>
      TodoRepository.addTodo(content, priority),
    { onSuccess: () => history.goBack() }
  );
};

export const useDeleteTodoMutation = () => {
  return useMutation(({ todoId }: { todoId: string }) =>
    TodoRepository.deleteTodo(todoId)
  );
};

export const useToggleTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ todoId, isChecked }: { todoId: string; isChecked: boolean }) =>
      TodoRepository.toggleTodo(todoId, isChecked),
    {
      onSuccess: (data: any) => {
        const oldData: any = queryClient.getQueryData("getTodos");
        oldData.forEach((todo: any) => {
          if (todo.id === data.id) {
            todo.is_completed = data.is_completed;
          }
        });
        queryClient.setQueryData("getTodos", oldData);
      },
    }
  );
};

export const useEditTodoMutation = () => {
  return useMutation(
    ({
      todoId,
      content,
      priority,
    }: {
      todoId: string;
      content: string;
      priority: number;
    }) => TodoRepository.editTodo(todoId, content, priority)
  );
};
