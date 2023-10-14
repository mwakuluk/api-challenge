import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './common/mongo.module';
// import { UsersController } from './users/users.controller';
// import { UsersService } from './users/users.services';

@Module({
  imports: [MongoModule],
  controllers: [AppController], // UsersController
  providers: [AppService], // UsersService
})
export class AppModule { }
