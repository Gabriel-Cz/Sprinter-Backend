import { Resolver, Args, Query, Mutation } from "@nestjs/graphql";
import { Schema as MongooseSchema } from 'mongoose';
import { Sprint } from "./models/sprint.model";
import { CreateSprintInput } from "./sprint.input";
import { SprintService } from "./sprint.service";

@Resolver(() => Sprint)
export class SprintResolver {
    constructor(
        private sprintService: SprintService
    ) {}

    @Query(() => Sprint, { name: 'sprints' })
    async getSprints() {
        return this.sprintService.findAll();
    }

    @Mutation(returns => Sprint, { name: 'newSprint' }) 
    async createSprint(@Args('createSprintData') createSprintData: CreateSprintInput) {
        return this.sprintService.create(createSprintData);
    }

    /*@Query(() => Sprint, { name: 'sprint' })
    async getSprint(@Args('id', { type: () => MongooseSchema.Types.ObjectId }) id: MongooseSchema.Types.ObjectId) {
        return this.sprintService.findOne(id);
    }*/

}

