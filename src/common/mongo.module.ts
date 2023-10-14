import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/api-challenge', {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }),
  ],
})
export class MongoModule { }
