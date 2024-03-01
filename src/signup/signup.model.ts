import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class UserSignup{

    @Prop({required:true})
    name:string;

    @Prop({unique:true,required:true})
    email:string;

    @Prop({required:true})
    password:string
}

export type UserSignupModel = UserSignup & Document
export const UserSignupSchema = SchemaFactory.createForClass(UserSignup)
