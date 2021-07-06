import { Field, ObjectType, ID } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@ObjectType()
export class UserModel {
    @Field(type => ID, { nullable: true })
    _id?: ObjectId;

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

    /* @Field(type => String, { nullable: true })
    currentSprintId?: string; */

    @Field(type => [ID], { nullable: true })
    contactsNetwork?: ObjectId[];
}