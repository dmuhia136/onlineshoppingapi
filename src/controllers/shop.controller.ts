import { Body, Controller, Post, Get, Param, Put } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AddProductDto, ProductDto, ShopDto } from 'src/Dto';
import { ProductService } from 'src/providers/product.service';
import { ShopService } from 'src/providers/shop.service';

@ApiTags('shop')
@Controller('shop')
export class ShopController {
  constructor(private shopService: ShopService) {}

  @Post('/create')
  @ApiCreatedResponse({
    description: 'shop created',
  })
  @ApiBadRequestResponse({
    description: 'Shop could not be created',
  })
  async createProduct(@Body() shop: ShopDto) {
    return this.shopService.createShop(shop);
  }

  @Get('/owner/:id')
  @ApiCreatedResponse({description:"Your shop fetched"})
  @ApiBadRequestResponse({description:"WE could not fetch your shops, check your connection"})
  async fetchMyShop(@Param('id') id:String){
    await this.shopService.getShopById(id)
  }

  @Put('/:id')
  @ApiCreatedResponse({description:"Product added"})
  @ApiBadRequestResponse({description:"WE could add product to your shop, check your connection"})
  async addProduct(@Param('id') id:String,@Body() product:AddProductDto){
    await this.shopService.addProduct(id,product)
  }

}
