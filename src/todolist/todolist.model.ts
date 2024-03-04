import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document,Types } from "mongoose";


@Schema()
export class TodoList{

    @Prop({ type: Types.ObjectId })
    id: Types.ObjectId;

    @Prop()
    list:string;

    @Prop()
    name:string;

    @Prop()
    email:string
}

export type TodoListModel = TodoList & Document
export const TodoListSchema = SchemaFactory.createForClass(TodoList)
