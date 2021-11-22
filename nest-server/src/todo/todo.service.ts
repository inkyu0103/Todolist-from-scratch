import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository) private todoRepository: TodoRepository,
  ) {}

  async getAllTodos(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async getTodoById(id: number): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const { content } = createTodoDto;

    // 여기서는 await이 필요가 없나?
    const todo = this.todoRepository.create({
      content,
      isCheck: false,
      isSaved: false,
    });

    await this.todoRepository.save(todo);
    return todo;
  }

  async deleteTodo(id: number): Promise<void> {
    this.todoRepository.delete(id);
  }

  async editTodo(id: number, content: string): Promise<Todo> {
    const todo = await this.getTodoById(id);

    todo.content = content;
    await this.todoRepository.save(todo);
    return todo;
  }

  async toggleTodo(id: number): Promise<Todo> {
    const todo = await this.getTodoById(id);
    todo.isCheck = !todo.isCheck;
    await this.todoRepository.save(todo);
    return todo;
  }
}
