import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoListDto } from './todolist.dto';
import { TodoListModel } from './todolist.model';
import { ViewListDto } from './viewlist.dto';

@Injectable()
export class TodolistService {
    constructor(
        @InjectModel("TodoList")
        private todoListModel:Model<TodoListModel>
    ){}

    async addlist(list:TodoListDto){
        const newList =new this.todoListModel({
            userid:list.userid,
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
    async viewMyList(view: ViewListDto){
        try {
            const viewList = await this.todoListModel.find({ id: view.userid });
            if (viewList) {
                return viewList
            } else {
                return { message: "List not found" };
            }
        } catch (error) {
            console.log(error);
            return { message: "Error" };
        }
    }
}
