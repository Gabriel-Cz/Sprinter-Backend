import { Field, ObjectType, ID } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@ObjectType()
export class UserModel {
    @Field(type => ID)
    _id: ObjectId;

    @Field(type => String)
    name: string;

    @Field(type => String)
    email: string;

    @Field(type => String)
    password: string;

    @Field(type => String)
    avatar: string;

    @Field(type => ID)
    currentSprintId: ObjectId;

    @Field(type => [String])
    contactsNetwork: string[];
}