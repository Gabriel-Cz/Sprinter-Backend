import { Field, ObjectType, ID } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@ObjectType()
export class TeamModel {
    @Field(type => ID)
    _id: ObjectId;

    @Field(type => ID)
    sprint_Id: ObjectId;

    @Field(type => ID)
    decisor_Id: ObjectId;
    
    @Field(type => ID)
    financesExp_Id: ObjectId;
    
    @Field(type => ID)
    customerExp_Id: ObjectId;

    @Field(type => ID)
    marketingExp_Id: ObjectId;

    @Field(type => ID)
    techExp_Id: ObjectId;

    @Field(type => ID)
    designExp_Id: ObjectId;
}