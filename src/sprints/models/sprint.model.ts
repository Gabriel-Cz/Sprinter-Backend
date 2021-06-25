import { Field, ObjectType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";


@ObjectType()
export class Sprint {
    @Field()
    name: String;

    @Field()
    description: String;

    @Field( {nullable: true} )
    image?: String;

    @Field()
    teamId: String;

    @Field()
    createdAt: Date;
}