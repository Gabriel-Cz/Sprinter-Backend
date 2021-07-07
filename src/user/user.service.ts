import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { CreateUserInput, LoginUserInput } from "./user.input";
import { User, UserDocument } from "./user.schema";
import * as bcrypt from 'bcrypt';

const saltRounds: number = 10;

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<UserDocument>
    ) {}

    async create(createUser: CreateUserInput): Promise<User> {
        try {
            const extractedPassword = createUser.password;
            const extractedEmail = createUser.email; 
            const userDB = await this.userModel.findOne({email: extractedEmail});
            createUser.password = bcrypt.hashSync(extractedPassword, saltRounds);
            if (userDB === null) {
                try {
                    const createdUser = new this.userModel(createUser);
                    return createdUser.save();
                } catch (error) {
                    throw new InternalServerErrorException(error);
                }
            } else throw new InternalServerErrorException('El correo electronico ya se encuentravregistrado, prueba de nuevo.');
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async login(loginUser: LoginUserInput): Promise<User> {
        try {
            const extractedPassword = loginUser.password;
            const extractedEmail = loginUser.email;
            const findedUser = await this.userModel.findOne({email: extractedEmail});
            if (findedUser) {
                const comparedPassword: boolean = bcrypt.compareSync(extractedPassword, findedUser.password);
                if (comparedPassword === false) throw new InternalServerErrorException('La contrasena es incorrecta prueba de nuevo.');
                else return findedUser;
            } else throw new InternalServerErrorException('El correo electronico no esta registrado, registrate.');;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async findOne(email: string): Promise<any> {
        try {
            const findedUser = this.userModel.findOne({email: email});
            return findedUser.exec();
        } catch(error) {
            throw new InternalServerErrorException(error);
        }
    }

    async deleteAccount(email: string): Promise<User> {
        try {
            const deletedUser = this.userModel.findOneAndDelete({email: email});
            return deletedUser.exec();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async addContact(_id: ObjectId, contacts_Ids: ObjectId[]): Promise<User> {
        try {
            const contactsUpdated = this.userModel.findByIdAndUpdate
            (_id, 
                { $push: {
                    contactsNetwork: {
                        $each: contacts_Ids
                    }
                }}
            );
            return contactsUpdated.exec();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async removeContact(_id: ObjectId, contact_Id: ObjectId): Promise<User> {
        try {
            const contactDeleted = this.userModel.findOneAndUpdate(
                _id,
                { $pull: {
                    contactsNetwork: contact_Id
                }})
            return contactDeleted.exec();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
