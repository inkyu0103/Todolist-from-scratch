import { EntityRepository, Repository } from 'typeorm';
import { Todo } from './todo.entity';

// 보통 클래스를 사용자 지정 저장소로 바꾼다.
@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {}
