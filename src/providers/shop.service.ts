import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddProductDto, ShopDto } from 'src/Dto';
import { Shop, ShopDocument } from 'src/models/shops.model';

@Injectable()
export class ShopService {
  constructor(@InjectModel(Shop.name) private shopModel: Model<ShopDocument>) {}

  async createShop(shop: ShopDto): Promise<any> {
    try {
      const response = await this.shopModel.create(shop);
      return { status: 200, body: response, message: 'Shop created' };
    } catch (error) {
      return { status: 500, message: error.message };
    }
  }

  async fetchShops(): Promise<any> {
    try {
      const response = await this.shopModel.find().populate("owner").populate("products");    
      return { status: 200, body: response };
    } catch (error) {
      return { status: 500, message: error.message };
    }
  }


  async getShopById(id: String): Promise<any> {
    try {
      const response = await this.shopModel.find({ owner: id });
      return { status: 200, body: response };
    } catch (error) {
      return { status: 500, message: error.message };
    }
  }

  async addProduct(id: String, product: AddProductDto): Promise<any> {
    try {
      const response = await this.shopModel.findByIdAndUpdate(id, {
        $addToSet: { products: product },
      });
      return { status: 200, message: 'Shop updated', body: response };
    } catch (error) {
      return { status: 500, message: error.message };
    }
  }


}
