import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { CreateUserInput, LoginUserInput } from "./user.input";
import { User, UserDocument } from "./user.schema";
import * as bcrypt from 'bcrypt';

const saltRounds = 10;

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<UserDocument>
    ) {}

    async create(createUser: CreateUserInput): Promise<User> {
        const extractedPassword = createUser.password;
        createUser.password = bcrypt.hashSync(extractedPassword, saltRounds); 
        try {
            const userDB = this.userModel.findOne({ email: createUser.email});
            if(!userDB) {
                const createdUser = new this.userModel(createUser);
                return createdUser.save();
            } else throw new InternalServerErrorException('El correo electronico ya se encuentravregistrado, prueba de nuevo.');
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async login(loginUser: LoginUserInput): Promise<User> {
        try {
            const findedUser = await this.userModel.findOne({email: loginUser.email});
            const comparedPassword = bcrypt.compareSync(loginUser.password, findedUser.password);
            if(!findedUser) {
                throw new InternalServerErrorException('El correo electronico no esta registrado, registrate.');
            } 
            if(!comparedPassword) {
                throw new InternalServerErrorException('La contrasena es incorrecta prueba de nuevo.');
            }
            else {
                return findedUser;
            }
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
