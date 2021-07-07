import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from 'mongoose';

@InputType()
export class CreateUserInput {
    @Field(type => String)
    name: string;

    @Field(type => String)
    email: string;
    
    @Field(type => String)
    password: string;

    @Field(type => String, { nullable: true })
    role?: string;

    @Field(type => String, { nullable: true })
    avatar?: string;

    @Field(type => [ID], { nullable: true })
    contactsNetwork?: ObjectId[];
}

@InputType()
export class LoginUserInput {
    @Field(type => String)
    email: string;

    @Field(type => String)
    password: string;
}