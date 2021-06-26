import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema, collection: "users"}])],
    providers: [UserService, UserResolver]
})

export class UserModule {}