import { Body, Controller, Post } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { TodoListDto } from './todolist.dto';
import { ViewListDto } from './viewlist.dto';

@Controller()
export class TodolistController {
    constructor(
        private readonly TodolistService:TodolistService
    ){}

    @Post('/addlist') //http://localhost:3005/addlist
    addlist(@Body()TodoListDto:TodoListDto){
        return this.TodolistService.addlist(TodoListDto)
    }

    @Post('/view') //http://localhost:3005/view
    viewlist(@Body()ViewListDto:ViewListDto){
        return this.TodolistService.viewMyList(ViewListDto)
    }
}