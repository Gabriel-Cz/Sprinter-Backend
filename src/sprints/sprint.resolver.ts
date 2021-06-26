import { Resolver, Args, Query, Mutation, ID } from "@nestjs/graphql";
import { Schema as MongooseSchema } from 'mongoose';
import { Sprint } from "./models/sprint.model";
import { CreateSprintInput } from "./sprint.input";
import { SprintService } from "./sprint.service";

@Resolver(of => Sprint)
export class SprintResolver {
    constructor(
        private sprintService: SprintService
    ) {}

    @Query(returns => [Sprint], { name: 'sprints' })
    async getSprints() {
        return this.sprintService.findAll();
    }

    @Query(returns => Sprint, { name: 'sprint' })
    async getSprint(@Args('_id', { type: () => ID }) _id: MongooseSchema.Types.ObjectId) {
        let sprintID = _id;
        return this.sprintService.findOne(sprintID);
    }

    @Mutation(returns => Sprint, { name: 'newSprint' }) 
    async createSprint(@Args('createSprintData') createSprintData: CreateSprintInput) {
        return this.sprintService.create(createSprintData);
    }

}

