import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from 'mongoose';

@InputType()
export class CreateUserInput {
    @Field(type => String)
    name: String;

    @Field(type => String)
    email: ObjectId;
    
    @Field(type => String)
    password: String;

    @Field(type => String, { nullable: true })
    role?: String;

    @Field(type => String, { nullable: true })
    avatar?: String;

    @Field(type => ID, { nullable: true })
    currentSprintId?: ObjectId;
}