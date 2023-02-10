import {Controller,Post,Body,Get, Param, Put, Patch} from '@nestjs/common'
import { AuthProvider } from '../providers/auth.service';
import { AddUserShopDto, LoginDto, UploadUserImageDto, UserDto } from 'src/Dto';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiTags,
  } from '@nestjs/swagger';

  @ApiTags('auth')
@Controller('Auth')
export class AuthController{
    constructor (private authProvider:AuthProvider){}
   @Post('create')
   @ApiCreatedResponse({
    description: 'User created',
  })
  @ApiBadRequestResponse({
    description: 'User could not be created',
  })
   async createUser(@Body() user:UserDto):Promise<any>{
    return this.authProvider.createUser(user)
   }    

   @Post('login')
   @ApiCreatedResponse({
    description: 'Login success',
  })
  @ApiBadRequestResponse({
    description: 'Login not successful',
  })
   async loginUser(@Body() user:LoginDto):Promise<any>{
    return this.authProvider.loginUser(user)
   } 

   @Get('/')
   @ApiCreatedResponse({
    description: 'Get all users success',
  })
  @ApiBadRequestResponse({
    description: 'Get all users not successful',
  })
   async GetAllUser():Promise<any>{
    return this.authProvider.getAllUsers()
   } 

   @Get('/:id')
   @ApiCreatedResponse({
    description: 'Get one users success',
  })
  @ApiBadRequestResponse({
    description: 'Get one users not successful',
  })
   async GetUserById(@Param('id') id: string):Promise<any>{
    return this.authProvider.getUserById(id)
   } 

   @Get('/:id')
   @ApiCreatedResponse({
    description: 'Get one users success',
  })
  @ApiBadRequestResponse({
    description: 'Get one users not successful',
  })
   async GetAllUsers():Promise<any>{
    return this.authProvider.getAllUsers()
   } 


   @Patch('/image/:id')
   @ApiCreatedResponse({
    description: 'Get one users success',
  })
  @ApiBadRequestResponse({
    description: 'Get one users not successful',
  })
   async UpdateUserImage(@Param('id') id: string,@Body() body:UploadUserImageDto):Promise<any>{
    return this.authProvider.UpdateUserImage(id,body)
   } 

   @Patch('/shop/:id')
   @ApiCreatedResponse({
    description: 'Get one users success',
  })
  @ApiBadRequestResponse({
    description: 'Get one users not successful',
  })
   async AddUserShop(@Param('id') id: string,@Body() body:AddUserShopDto):Promise<any>{
    return this.authProvider.AddUserShop(id,body)
   } 
  }
