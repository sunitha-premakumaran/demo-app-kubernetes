import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todos/controller/todo.controller';
import { Todo } from './todos/entities/todo.entity';
import { TodoService } from './todos/services/todo.service';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [Todo],
      username: 'postgres',
      host: "localhost",
      password: 'root',
      database: 'todo_db',
      synchronize: true,
      port: 5432,
      retryAttempts: 3,
      logging: true,
      logger: 'advanced-console'
    }),
    TypeOrmModule.forFeature([Todo])
  ],
  controllers: [
    AppController,
    TodoController
  ],
  providers: [
    AppService,
    TodoService
  ],
})
export class AppModule { }
