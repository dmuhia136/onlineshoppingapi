import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto, UserDto } from 'src/Dto';
import { User, UserDocument } from 'src/models/user.model';
import * as bcrypt from 'bcrypt';
const saltOrRounds = 10;

@Injectable()
export class AuthProvider {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  //create user
  async createUser(userDto: UserDto): Promise<any> {
    try {
      console.log(userDto.password);
      let password = await userDto.password;
      const hash = await bcrypt.hash(`${password}`, saltOrRounds);
      const data = {
        firstname: userDto.firstname,
        lastname: userDto.lastname,
        email: userDto.email.toLowerCase(),
        password: hash,
      };

      const newUser = await new this.userModel(data).save();
      newUser.delete(password);
      return { status: 200, message: 'Sign up succesful', body: newUser };
    } catch (error) {
      return { status: 500, message: error.message };
    }
  }

  //login user
  async loginUser(login: LoginDto): Promise<any> {
    try {
      const user = await this.userModel.findOne({ email: login.email });
      if (!user) {
        return { status: false, message: 'User not found' };
      }
      const isMatch = await bcrypt.compare(`${login.password}`, user.password);

      if (isMatch) {
        return { status: 200, message: 'Login succesful', body: user };
      } else {
        return { status: 404, message: 'User password did not match' };
      }
    } catch (error) {
      return { status: 500, message: error.mesage };
    }
  }
  async getAllUsers(): Promise<any | undefined> {
    const data = await this.userModel.find();
    return { status: 200, message: 'User fetch succesful', body: data };
  }
  async getUserById(id): Promise<any> {
    try {
      const data = await this.userModel.findById(id);
      return { status: true, body: data };
    } catch (e) {
      return { status: false, message: e.message };
    }
  }
}
