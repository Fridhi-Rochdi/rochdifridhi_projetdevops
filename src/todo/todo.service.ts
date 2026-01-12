import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class TodoService {
  private readonly logger = new Logger(TodoService.name);
  private todos: Todo[] = [];

  create(createTodoDto: CreateTodoDto): Todo {
    const todo = new Todo({
      id: randomUUID(),
      title: createTodoDto.title,
      description: createTodoDto.description,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    this.todos.push(todo);
    this.logger.debug(`Todo created: ${JSON.stringify(todo)}`);
    return todo;
  }

  findAll(): Todo[] {
    this.logger.debug(`Returning ${this.todos.length} todos`);
    return this.todos;
  }

  findOne(id: string): Todo {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      this.logger.warn(`Todo not found: ${id}`);
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  update(id: string, updateTodoDto: UpdateTodoDto): Todo {
    const todo = this.findOne(id);
    Object.assign(todo, {
      ...updateTodoDto,
      updatedAt: new Date(),
    });
    this.logger.debug(`Todo updated: ${id}`);
    return todo;
  }

  remove(id: string): void {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) {
      this.logger.warn(`Todo not found for deletion: ${id}`);
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    this.todos.splice(index, 1);
    this.logger.debug(`Todo deleted: ${id}`);
  }
}
