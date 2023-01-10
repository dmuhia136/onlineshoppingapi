import {Controller,Post,Body,Get} from '@nestjs/common'
import { AuthProvider } from '../providers/auth.service';
import { LoginDto, UserDto } from 'src/Dto';
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
    console.log(user);
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
}
