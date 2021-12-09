import { Todo } from 'src/todo/todo.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

import { Exclude } from 'class-transformer';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany((type) => Todo, (todo) => todo.user, { eager: true })
  todos: Todo[];

  //@Column({ nullable: true })
  //@Exclude()
  //currentHashedRefreshToken?: string;
}
