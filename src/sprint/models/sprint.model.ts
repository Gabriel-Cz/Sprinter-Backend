import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@ObjectType()
export class Sprint {
    @Field(type => ID)
    _id: ObjectId;

    @Field(type => ID)
    user_Id: ObjectId;
    
    @Field(type => ID, { nullable: true })
    team_Id?: ObjectId;

    @Field(type => String)
    name: String;

    @Field(type => String)
    description: String;

    @Field(type => String, {nullable: true} )
    image?: String;

    @Field(type => Date, {nullable: true})
    createdAt?: Date;
}