import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@ObjectType()
export class Sprint {
    @Field(type => ID)
    _id: ObjectId;

    @Field(type => String)
    name: String;

    @Field(type => String)
    description: String;

    @Field(type => String, {nullable: true} )
    image?: String;

    @Field(type => ID, {nullable: true})
    teamId?: ObjectId;

    @Field(type => ID)
    userId: ObjectId;

    @Field(type => Date, {nullable: true})
    createdAt?: Date;
}