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
}

export class CategoryDto{
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  @ApiProperty({
    description: 'Category name',
    example: 'Fruits',
  })
  name: String;
  
}