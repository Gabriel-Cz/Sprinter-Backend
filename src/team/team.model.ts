import { Field, ObjectType, ID } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@ObjectType()
export class TeamModel {
    @Field(type => ID)
    _id: ObjectId;

    @Field(type => ID)
    decisorId: ObjectId;
    
    @Field(type => ID)
    financesExpId: ObjectId;
    
    @Field(type => ID)
    customerExpId: ObjectId;

    @Field(type => ID)
    marketingExpId: ObjectId;

    @Field(type => ID)
    techExpId: ObjectId;

    @Field(type => ID)
    designExpId: ObjectId;
}