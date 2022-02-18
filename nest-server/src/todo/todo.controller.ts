import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
@UseGuards(AuthGuard())
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getAllTodos(@GetUser() user): Promise<Todo[]> {
    return this.todoService.getAllTodos(user);
  }

  @Get('/:id/chart')
  getChartData(
    @GetUser() user,
    @Param('id', ParseIntPipe) id: number,
    @Query('term', ParseIntPipe) searchTerm: number,
  ): Promise<any> {
    return this.todoService.getChartData(user, searchTerm);
  }

  @Get('/completed')
  getCompletedTodos(@GetUser() user): Promise<Todo[]> {
    return this.todoService.getCompletedTodos(user);
  }
  @Get('/uncompleted')
  getUncompletedTodos(@GetUser() user): Promise<Todo[]> {
    return this.todoService.getUncompletedTodos(user);
  }

  @Post()
  createTodo(
    @Body() createTodoDto: CreateTodoDto,
    @GetUser() user: User,
  ): Promise<Todo> {
    console.log(createTodoDto);
    return this.todoService.createTodo(createTodoDto, user);
  }

  @Delete('/:id')
  deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.todoService.deleteTodo(id);
  }

  @Patch('/:id')
  toggleTodo(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<Todo> {
    return this.todoService.toggleTodo(id, user);
  }

  @Put('/:id')
  editTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() createTodoDto: CreateTodoDto,
    @GetUser() user: User,
  ): Promise<Todo> {
    return this.todoService.editTodo(id, createTodoDto, user);
  }
}
