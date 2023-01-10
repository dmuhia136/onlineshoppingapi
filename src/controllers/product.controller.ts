import { Body, Controller, Post,Get, Param } from '@nestjs/common'
import {
    ApiBadRequestResponse,
    ApiBody,
    ApiCreatedResponse,
    ApiTags,
} from '@nestjs/swagger';
import { ProductDto } from 'src/Dto';
import { ProductService } from 'src/providers/product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post('/create')
    @ApiCreatedResponse({
        description: 'User created',
    })
    @ApiBadRequestResponse({
        description: 'User could not be created',
    })
    async createProduct(@Body() product: ProductDto) {
        return this.productService.createProduct(product)
    }

    @Get('/:id')
    @ApiCreatedResponse({
      description: 'Get one product',
    })
    @ApiBadRequestResponse({
      description:
        'No products were found or there was a problem with your connection',
    })
    async findOne(@Param('id') id: string): Promise<any> {
      return await this.productService.findById(id);
    }

   @Get('user/:id') 
   @ApiCreatedResponse({
    description: 'Get user products',
  })
  @ApiBadRequestResponse({
    description:
      'No products were found or there was a problem with your connection',
  })
  async findUserProducts(@Param('id') id: string): Promise<any> {
    return await this.productService.findUserProducts(id);
  }

  @Get('/')
  @ApiCreatedResponse({
    description: 'Get all products',
  })
  @ApiBadRequestResponse({
    description:
      'No products were found or there was a problem with your connection',
  })
  async findAll(): Promise<any> {
    return await this.productService.findAll();
  }
}