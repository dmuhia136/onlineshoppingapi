import {Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from 'src/controllers/product.controller';
import { Product, ProductSchema } from 'src/models/product.model';
import { ProductService } from 'src/providers/product.service';

@Module({
    imports:[MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),],
    controllers:[ProductController],
    providers:[ProductService],
    exports:[]
})
export class ProductModule{}