import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoDto } from '../dtos/todo.dto';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(Todo) private readonly todoRepo: Repository<Todo>
    ) { }

    async createTodo(todo: TodoDto): Promise<Todo> {
        return await this.todoRepo.save(this.todoRepo.create(todo));
    }

    async getTodos(): Promise<Todo[]> {
        return await this.todoRepo.createQueryBuilder('todo')
            .getMany();
    }

    async deleteTodo(id: string): Promise<{ id: string }> {
        await this.todoRepo.delete(id);
        return { id };
    }

    async updateTodo(id: string, data: Partial<Todo>): Promise<{ id: string }> {
        await this.todoRepo.update(id, data);
        return { id };
    }
}
