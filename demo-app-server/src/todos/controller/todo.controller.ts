import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoDto } from '../dtos/todo.dto';
import { Todo } from '../entities/todo.entity';
import { TodoService } from '../services/todo.service';

@Controller('todos')
export class TodoController {

    constructor(private readonly todoSvc: TodoService) { }

    @Get()
    async getTodos(): Promise<Todo[]> {
        return await this.todoSvc.getTodos();
    }

    @Post()
    async createTodo(@Body() todo: TodoDto): Promise<Todo> {
        return await this.todoSvc.createTodo(todo);
    }

    @Put('id')
    async updateTodo(@Param('id') id: string, @Body() todo: Partial<TodoDto>): Promise<{ id: string }> {
        return await this.todoSvc.updateTodo(id, todo);
    }

    @Delete('id')
    async deleteTodo(@Param('id') id: string): Promise<{ id: string }> {
        return await this.todoSvc.deleteTodo(id);
    }

}
