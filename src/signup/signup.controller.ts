import { Controller ,Body ,Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupDto } from './signup.dto';
import { LoginDto } from './login.dto';

@Controller('todo')
export class SignupController {

    constructor(
        private readonly SignupService:SignupService
    ){}

    @Post('/signup')//http://localhost:3005/todo/signup
    signup(@Body() SignupDto:SignupDto){
        return this.SignupService.Signup(SignupDto)
    }

    @Post('/login')//http://localhost:3005/todo/login
    login(@Body()LoginDto:LoginDto){
        return this.SignupService.login(LoginDto)
    }


}

