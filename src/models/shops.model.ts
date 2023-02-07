import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.model';
import {Product} from './product.model'

export type ShopDocument = HydratedDocument<Shop>;

@Schema()
export class Shop {
    @Prop()
    name: string;
    @Prop()
    location: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User',default:null })
    owner: User;
    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Product',default:null }])
    products: Product;
}

export const ShopSchema = SchemaFactory.createForClass(Shop); 