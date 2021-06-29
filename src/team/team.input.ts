import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from 'mongoose';

@InputType()
export class CreateTeamInput {
    @Field(type => ID)
    decisorId: ObjectId;

    @Field(type => ID, { nullable: true })
    financesExpId?: ObjectId;
    
    @Field(type => ID, { nullable: true })
    customerExpId?: ObjectId;

    @Field(type => ID, { nullable: true })
    marketingExpId?: ObjectId;

    @Field(type => ID)
    techExpId: ObjectId;

    @Field(type => ID, { nullable: true })
    designExpId?: ObjectId;
}