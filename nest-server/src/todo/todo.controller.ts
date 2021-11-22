import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAllTodos();
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.createTodo(createTodoDto);
  }

  @Delete('/:id')
  deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.todoService.deleteTodo(id);
  }

  @Put('/:id')
  editTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body('content') content: string,
  ): Promise<Todo> {
    return this.todoService.editTodo(id, content);
  }

  @Put('/toggle/:id')
  toggleTodo(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.todoService.toggleTodo(id);
  }
}
