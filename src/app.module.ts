import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';
import { ListModule } from './list/list.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://minipaul:minipaul@cluster0.isuura7.mongodb.net/TodoDb?retryWrites=true&w=majority&appName=Cluster0'),
    SignupModule, ListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}