import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from 'src/Dto';
import { Product, ProductDocument } from 'src/models/product.model';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async createProduct(product: ProductDto): Promise<any> {
        try {
            const data = await new this.productModel(product).save()
            return { status: 200, message: 'Product created', body: data }
        } catch (error) {
            return { status: 500, message: error.message }
        }
    }
    async findById(id: String): Promise<any> {
        try {
            const data = await this.productModel.findById(id).populate('owner').populate('category');
            return { status: 200, body: data }
        } catch (error) {
            return { status: 500, message: error.message }

        }
    }
    async findUserProducts(id: string): Promise<any> {
        try {
            const data = await this.productModel.find({ owner: id }).populate('owner').populate('category');
            return { status: 200, body: data }
        } catch (error) {
            return { status: 500, message: error.message }
        }
    }
    async findAll(): Promise<any> {
        try {
            const data = await this.productModel.find().populate('owner').populate('category');
            return { status: 200, body: data }

        } catch (error) {
            return { status: 500, message: error.message }

        }
    }
}