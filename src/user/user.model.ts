import { Field, ObjectType, ID } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@ObjectType()
export class UserModel {
    @Field(type => ID)
    _id: ObjectId;

    @Field(type => String)
    name: String;

    @Field(type => String)
    email: String;

    @Field(type => String)
    password: String;

    @Field(type => String)
    avatar: String;

    @Field(type => ID)
    currentSprintId: ObjectId;

    @Field(type => [String])
    contactsNetwork: String[];
}