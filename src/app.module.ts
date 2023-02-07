import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/product.module';
import { CategoryModule } from './modules/category.module';
import { ShopModule } from './modules/shop.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ProductModule,
    CategoryModule,
    ShopModule
  ],
})
export class AppModule {}
