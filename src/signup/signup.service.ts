import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSignupModel } from './signup.model';
import * as bcrypt from 'bcrypt'
import { SignupDto } from './signup.dto';
import { LoginDto } from './login.dto';


@Injectable()
export class SignupService {
    constructor(
        @InjectModel("UserSignup") 
        private userSignupModel:Model<UserSignupModel>
    ){}

    async Signup(user:SignupDto){
        const newUser = new this.userSignupModel({
            name:user.name,
            email:user.email,
            password:await bcrypt.hash(user.password,10)
        })
        try {
            await newUser.save();
            return { status: 'success'};
        } catch (error) {
            console.log(error)
            return { 
                "status":"failed"
            }
          }
        }

    async login(login:LoginDto){

        const validuser = await this.userSignupModel.findOne({email:login.email})
        if(!validuser){
            return {"status":"failed","error":"User not found"}
        }

        const validPassword = await bcrypt.compare(login.password,validuser.password)
        if(!validPassword){
            return {"status":"failed","error":"Invalid password"}
        }
        return {"Message":"Successfully logged in","user":validuser.name}
    }
        
    }


        