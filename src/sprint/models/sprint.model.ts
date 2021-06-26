import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

@ObjectType()
export class Sprint {
    @Field(type => ID)
    _id: MongooseSchema.Types.ObjectId;

    @Field(type => String)
    name: String;

    @Field(type => String)
    description: String;

    @Field(type => String, {nullable: true} )
    image?: String;

    /*@Field(type => ID)
    teamId: MongooseSchema.Types.ObjectId;

    @Field(type => ID)
    userId: MongooseSchema.Types.ObjectId;
    */

    @Field(type => Date)
    createdAt?: Date;
}