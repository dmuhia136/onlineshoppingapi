import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsDecimal
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty({
    description: 'Users email',
    example: 'John@gmail.com',
  })
  email: String;

  @IsString()
  @ApiProperty({
    description: 'Users profile image',
    example: '',
  })
  profileimage:String;

  @IsString()
  @ApiProperty({
    description: 'Users first name',
    example: 'John',
  })
  firstname: String;

  @IsString()
  @ApiProperty({
    description: 'Users last name',
    example: 'John',
  })
  lastname: String;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @ApiProperty({
    description: 'Password',
    example: '123456',
  })
  password: String;

  @IsString()
  @ApiProperty({
    description: 'Shop id',
    example: '63bbe284e12558b05e73d7c4',
  })
  shop: string;
}

export class LoginDto {
  @IsString()
  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty({
    description: 'Users email',
    example: 'John@gmail.com',
  })
  email: String;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @ApiProperty({
    description: 'Password',
    example: '123456',
  })
  password: String;
}

export class ProductDto {
  @IsString()
  @ApiProperty({
    description: 'Product name',
    example: 'Apple',
  })
  name: string;
  @IsString()
  @ApiProperty({
    description: 'Image url name',
    example: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marketing91.com%2Fproduct-portfolio%2F&psig=AOvVaw1zayn-wkeIHwjz6c9S3rgw&ust=1676016086955000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDw4M_8h_0CFQAAAAAdAAAAABAE',
  })
  imageurl: string;
  @IsNumber()
  @ApiProperty({
    description: 'Price',
    example: 12
  })
  price: number;

  @IsString()
  @ApiProperty({
    description: 'Product description',
    example: 'New product for market',
  })
  description: string;

  @IsNumber()
  @ApiProperty({
    description: 'Product count',
    example: 20,
  })
  count: number;
  @IsString()
  @ApiProperty({
    description: 'Owner id',
    example: '63bbe284e12558b05e73d7c4',
  })
  owner: string;
  @IsString()
  @ApiProperty({
    description: 'Category id',
    example: '63bbe284e12558b05e73d7c4',
  })
  category: string;
}

export class CategoryDto{
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  @ApiProperty({
    description: 'Shop name',
    example: 'Fruits',
  })
  name: String;
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  @ApiProperty({
    description: 'Location name',
    example: 'Fruits',
  })
  location: String;
  
}

export class ShopDto{
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  @ApiProperty({
    description: 'Shop name',
    example: 'Mello',
  })
  name: String;
  @IsString()
  @IsNotEmpty({ message: 'Location is required' })
  @ApiProperty({
    description: 'Location name',
    example: 'Mello',
  })
  location: String;
  @IsString()
  @ApiProperty({
    description: 'Owner id',
    example: '63bbe284e12558b05e73d7c4',
  })
  owner: string;
}

export class AddProductDto{
  @IsString()
  @ApiProperty({
    description: 'Product id',
    example: '63bbe284e12558b05e73d7c4',
  })
  product:string;
}

export class UploadUserImageDto{
  @IsString()
  @ApiProperty({
    description: 'Profile image',
    example: '',
  })
  profileimage:string;
}

export class AddUserShopDto{
  @IsString()
  @ApiProperty({
    description: 'Shop',
    example: '',
  })
  shop:string;
}