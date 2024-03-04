import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoListDto } from './todolist.dto';
import { TodoListModel } from './todolist.model';

@Injectable()
export class TodolistService {
    constructor(
        @InjectModel("TodoList")
        private todoListModel:Model<TodoListModel>
    ){}

    async addlist(list:TodoListDto){
        const newList =new this.todoListModel({
            id:list.Id,
            list:list.list,
            name:list.name,
            email:list.email
        })
        try {
            await newList.save()
            return { "message":"Succcessfully added"}
        } catch (error) {
            console.log(error)
            return {"message":"Error"}
        }
    }
}
