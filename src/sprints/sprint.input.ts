import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateSprintInput {
    @Field()
    name: string;

    @Field()
    description: string;

    @Field({ nullable: true })
    image?: string;

    @Field()
    teamId: string;

    @Field()
    createdAt: Date;
}