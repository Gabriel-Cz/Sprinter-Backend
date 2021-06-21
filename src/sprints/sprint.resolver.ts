import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType() 
export class Sprint {
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