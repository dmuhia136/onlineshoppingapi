import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.model';
import {Category} from './category.model'

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    name: string;
    @Prop()
    price: number;
    @Prop()
    description: string;
    @Prop()
    count: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User',default:null })
    owner: User;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User',default:null })
    category: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product); 