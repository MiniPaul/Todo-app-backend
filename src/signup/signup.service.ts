import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSignupModel } from './signup.model';
import * as bcrypt from 'bcrypt';
import { SignupDto } from './signup.dto';
import { LoginDto } from './login.dto';
import * as jwt from 'jsonwebtoken';


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

        async login(login: LoginDto){
            const validuser = await this.userSignupModel.findOne({ email: login.email });
            if (!validuser) {
                return { "status": "failed", "error": "User not found" };
            }
    
            const validPassword = await bcrypt.compare(login.password, validuser.password);
            if (!validPassword) {
                return { "status": "failed", "error": "Invalid password" };
            }
    
            const token = jwt.sign({ email: login.email }, 'hello123', { expiresIn: '1h' });

            return { "status": "success", "message": "Successfully logged in", "token": token ,"user":validuser.name,"Id":validuser._id};
            
        }         
}