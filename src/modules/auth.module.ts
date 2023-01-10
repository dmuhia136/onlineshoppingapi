import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from 'src/controllers/auth.controller';
import { User, UserSchema } from 'src/models/user.model';
import { AuthProvider } from 'src/providers/auth.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),],
  controllers:[AuthController],
  providers:[AuthProvider]
})
export class AuthModule {}
