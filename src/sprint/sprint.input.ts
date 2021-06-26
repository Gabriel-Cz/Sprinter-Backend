import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateSprintInput {
    @Field(type => String)
    name: string;

    @Field(type => String)
    description: string;

    @Field({ nullable: true })
    image?: string;

    @Field(type => Date, { nullable: true })
    createdAt?: Date;
}