import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Category, CategoryDocument } from 'src/models/category.model';
import { CategoryDto } from 'src/Dto';
const saltOrRounds = 10;

@Injectable()
export class CategoryProvider {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

async  createCategory(cat:CategoryDto): Promise<any>{
    let exist=await this.categoryModel.find({name:cat.name})
    if(exist.length >0){
return {status:false,message:`You have a category with that name ${cat.name}`}
    }
    const data=await this.categoryModel.create(cat);
    return {status:true,body:data}
  }
  async fetchCategory():Promise<any>{
    const data=await this.categoryModel.find()
    return {status:true,body:data}
  }
}