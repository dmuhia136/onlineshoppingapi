import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';


export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
    @Prop()
    name: string;
 
}

export const CategorySchema = SchemaFactory.createForClass(Category); 