import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
 
@InputType()
export class CreateSprintInput {
    @Field(type => String)
    name: string;

    @Field(type => String)
    description: string;

    @Field(type => String, { nullable: true })
    image?: string;

    @Field(type => ID, { nullable: true })
    teamId?: ObjectId;

    @Field(type => ID)
    userId: ObjectId;

    @Field(type => Date, { nullable: true })
    createdAt?: Date;
}