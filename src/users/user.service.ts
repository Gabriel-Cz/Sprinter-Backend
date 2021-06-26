import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user-dto';
import { User, UserDocument } from "./user.schema";

@Injectable()
export default class UserService {
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<UserDocument>
    ) {}

    async create(createUser: CreateUserDto): Promise<User> {
        try {
            const createdUser = new this.userModel(createUser);
            return createdUser.save();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async login(loginUser: LoginUserDto): Promise<User> {
        try {
            const findedUser = this.userModel.findOne({email: loginUser.email}) 
            return findedUser.exec();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

}
