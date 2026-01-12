export class Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<Todo>) {
    Object.assign(this, partial);
  }
}
