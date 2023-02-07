import {Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { ShopController } from 'src/controllers/shop.controller';
import { Shop, ShopSchema } from 'src/models/shops.model';
import { ShopService } from 'src/providers/shop.service';

@Module({
    imports:[MongooseModule.forFeature([{ name: Shop.name, schema: ShopSchema }]),],
    controllers:[ShopController],
    providers:[ShopService],
    exports:[]
})
export class ShopModule{}