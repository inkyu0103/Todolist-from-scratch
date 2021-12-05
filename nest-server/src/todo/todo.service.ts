import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository) private todoRepository: TodoRepository,
  ) {}

  async getAllTodos(user: User): Promise<Todo[]> {
    const query = this.todoRepository.createQueryBuilder('todo');
    query
      .where('todo.userId = :userId', { userId: user.id })
      .andWhere("date_trunc('day',created_at)::date = current_date")
      .orderBy('created_at', 'ASC');

    const todos = await query.getMany();
    return todos;
  }

  async getCompletedTodos(user: User): Promise<Todo[]> {
    const query = this.todoRepository.createQueryBuilder('todo');
    query
      .where('todo.userId = :userId', { userId: user.id })
      .andWhere("date_trunc('day',created_at)::date = current_date")
      .andWhere('is_completed = true')
      .orderBy('created_at', 'ASC');

    const todos = await query.getMany();
    return todos;
  }

  async getUncompletedTodos(user: User): Promise<Todo[]> {
    const query = this.todoRepository.createQueryBuilder('todo');
    query
      .where('todo.userId = :userId', { userId: user.id })
      .andWhere("date_trunc('day',created_at)::date = current_date")
      .andWhere('is_completed = false')
      .orderBy('created_at', 'ASC');

    const todos = await query.getMany();
    return todos;
  }

  async getTodoById(id: number, user: User): Promise<Todo> {
    return this.todoRepository.findOne({ id, user });
  }

  async createTodo(
    createTodoDto: CreateTodoDto,
    @GetUser() user: User,
  ): Promise<Todo> {
    const { content, priority } = createTodoDto;

    const todo = new Todo();
    todo.content = content;
    todo.priority = priority;
    todo.is_completed = false;
    todo.user = user;

    await todo.save();
    delete todo.user;

    return todo;
  }

  async deleteTodo(id: number): Promise<void> {
    this.todoRepository.delete(id);
  }

  async editTodo(
    id: number,
    createTodoDto: CreateTodoDto,
    user: User,
  ): Promise<Todo> {
    const { content, priority } = createTodoDto;
    const todo = await this.getTodoById(id, user);

    todo.content = content;
    todo.priority = priority;

    await this.todoRepository.save(todo);
    return todo;
  }

  async toggleTodo(id: number, user: User): Promise<Todo> {
    const todo = await this.getTodoById(id, user);
    todo.is_completed = !todo.is_completed;
    await this.todoRepository.save(todo);
    return todo;
  }
}
