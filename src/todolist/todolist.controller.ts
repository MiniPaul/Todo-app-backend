import { Body, Controller, Post } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { TodoListDto } from './todolist.dto';

@Controller()
export class TodolistController {
    constructor(
        private readonly TodolistService:TodolistService
    ){}

    @Post('/addlist') //http://localhost:3005/todo/addlist
    addlist(@Body()TodoListDto:TodoListDto){
        return this.TodolistService.addlist(TodoListDto)
    }
}