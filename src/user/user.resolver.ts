import { Resolver, Args, Query, Mutation, ID } from "@nestjs/graphql";
import { ObjectId } from 'mongoose';
import { UserModel }  from './user.model';
import { UserService } from './user.service';
import { CreateUserInput } from './user.input';

@Resolver()
export class UserResolver{
    constructor(
        private userService: UserService
    ) {}

    @Mutation(returns => UserModel, { name: 'newUser' })
    async createUser(@Args('createUserData') createUserData: CreateUserInput) {
        const user = createUserData;
        return this.userService.create(user);
    }
}