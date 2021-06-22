import { Field, ObjectType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

@ObjectType() 
export class SprintResolver {
    @Field(type => MongooseSchema.Types.ObjectId)
    _id: MongooseSchema.Types.ObjectId

    @Field(type => String)
    name: String;
    
    @Field(type => String)
    description: String;

    @Field(type => String)
    image: String;

    @Field(type => Number)
    teamId: Number;
    
    @Field(type => Date)
    date: Date;
}