import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  priority: number;

  @Column()
  is_completed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne((type) => User, (user) => user.todos, { eager: false })
  user: User;
}
