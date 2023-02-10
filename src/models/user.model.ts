import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Shop } from './shops.model';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  firstname: string;
  @Prop()
  lastname: string;
  @Prop({default:''})
  profileimage: string;
  @Prop({unique:true})
  email: string;
  @Prop()
  password: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Shop',default:null })
  shop: Shop;
}

export const UserSchema = SchemaFactory.createForClass(User);