import { Module } from '@nestjs/common';
import { TodolistController } from './todolist.controller';
import { TodolistService } from './todolist.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoListSchema } from './todolist.model';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:"TodoList",
        schema:TodoListSchema
      }
    ])
  ],
  controllers: [TodolistController],
  providers: [TodolistService]
})
export class TodolistModule {}
