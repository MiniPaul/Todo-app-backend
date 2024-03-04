import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSignupSchema } from './signup.model';

@Module({
  imports : [MongooseModule.forFeature(
    [
      {
        name:"UserSignup",
        schema:UserSignupSchema
      }
    ] 
  )],
  controllers: [SignupController],
  providers: [SignupService]
})

export class SignupModule {}