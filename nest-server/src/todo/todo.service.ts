import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { getManager } from 'typeorm';
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

  async getChartData(user: User, searchTerm: number): Promise<any> {
    const entityManager = getManager();
    const result = await entityManager.query(
      `select to_char(created_at,'MM-DD') as dat ,count(case when is_completed = true then 1 end) as completed , count(*) as total from todo where "userId" = ${
        user.id
      } and created_at between current_date-${String(
        searchTerm - 1,
      )} and current_date+1  group by dat order by dat`,
    );
    console.log(result);

    const data = {
      labels: [],
      datasets: [],
    };

    if (searchTerm === 1) {
      data.labels.push("Today's Result");

      const complete = {
        label: '완료',
        data: 0,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      };

      const unComplete = {
        label: '미완료',
        data: 0,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      };

      const { completed, total } = result[0];
      complete.data = Number(completed);
      unComplete.data = Number(total) - Number(completed);
      data.datasets.push(complete);
      data.datasets.push(unComplete);

      console.log(data);
      return data;
    }

    if (searchTerm === 7) {
      const datasetsData = {
        data: [],
        label: '달성률',
        borderColor: '#3e95cd',
        fill: false,
      };
      result.forEach(({ dat, completed, total }) => {
        data.labels.push(dat);
        datasetsData.data.push((completed / total) * 100);
      });

      data.datasets.push(datasetsData);

      return data;
    }
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
    console.log(todo, 'is todo');
    return todo;
  }

  async toggleTodo(id: number, user: User): Promise<Todo> {
    const todo = await this.getTodoById(id, user);
    todo.is_completed = !todo.is_completed;
    await this.todoRepository.save(todo);
    return todo;
  }
}
