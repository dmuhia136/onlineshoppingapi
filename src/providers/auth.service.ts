import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { LoginDto, UserDto } from 'src/Dto'
import { User, UserDocument } from 'src/models/user.model'
import * as bcrypt from 'bcrypt';
const saltOrRounds = 10;

@Injectable()
export class AuthProvider {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    //create user
    async createUser(userDto: UserDto): Promise<any> {
        console.log(userDto.password);
        const password=await userDto.password
        const hash = bcrypt.hash(password, saltOrRounds);
        // const data = {
        //     firstname: userDto.firstname,
        //     lastname: userDto.lastname,
        //     email: userDto.email,
        //     password: hash
        // }
        // console.log(data);

        const newUser = await new this.userModel(userDto).save()
        return { status: 200, message: 'Sign up succesful', body: newUser }
    }

    //login user
    async loginUser(login: LoginDto): Promise<any> {
        try {
            const user = await this.userModel.findOne({ email: login.email })
            // const isMatch = bcrypt.compare(login.password, user.password);
            if (user) {
                return { status: 200, message: 'Login succesful', body: user }
            } else {
                return { status: 404, message: 'User not found' }
            }
        } catch (error) {
            return { status: 500, message: error.mesage }
        }
    }
    async getAllUsers():Promise<any|undefined>{
        const data=await this.userModel.find();
        return { status: 200, message: 'User fetch succesful', body: data }

    }
}