import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.model';

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
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    owner: User;
}

export const ProductSchema = SchemaFactory.createForClass(Product); 