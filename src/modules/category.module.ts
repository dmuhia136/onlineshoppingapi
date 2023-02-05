import {Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from 'src/controllers/categoryController';
import { Category, CategorySchema } from 'src/models/category.model';
import { CategoryProvider } from 'src/providers/category.service';

@Module({
    imports:[MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),],
    controllers:[CategoryController],
    providers:[CategoryProvider],
    exports:[]
})
export class CategoryModule{}