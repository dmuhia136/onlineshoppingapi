import { Body, Controller, Post,Get, Param } from '@nestjs/common'
import {
    ApiBadRequestResponse,
    ApiBody,
    ApiCreatedResponse,
    ApiTags,
} from '@nestjs/swagger';
import { CategoryDto } from 'src/Dto';
import { CategoryProvider } from 'src/providers/category.service';

@ApiTags('categories')
@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryProvider) { }

    @Post('/create')
    @ApiCreatedResponse({
        description: 'category created',
    })
    @ApiBadRequestResponse({
        description: 'category could not be created',
    })
    async createProduct(@Body() cat: CategoryDto) {
        return this.categoryService.createCategory(cat)
    }

    @Get('/')
    @ApiCreatedResponse({
     description: 'Get all category success',
   })
   @ApiBadRequestResponse({
     description: 'Get all category not successful',
   })
    async GetAllUser():Promise<any>{
     return this.categoryService.fetchCategory();
    } 
 
}