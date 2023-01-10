import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [AuthModule,MongooseModule.forRoot('mongodb://localhost/nest'),ProductModule],
})
export class AppModule {}
