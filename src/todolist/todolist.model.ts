import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document,SchemaTypes,Types } from "mongoose";
import { UserSignupModel } from "src/signup/signup.model";

@Schema()
export class TodoList{

    @Prop({ type: SchemaTypes.ObjectId, ref: 'UserSignup' }) 
    userid: UserSignupModel;

    @Prop()
    list:string;

    @Prop()
    name:string;

    @Prop()
    email:string
}

export type TodoListModel = TodoList & Document
export const TodoListSchema = SchemaFactory.createForClass(TodoList)    