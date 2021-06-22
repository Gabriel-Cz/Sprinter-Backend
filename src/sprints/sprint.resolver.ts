import { Parent, Resolver } from "@nestjs/graphql";
import { Schema as MongooseSchema } from 'mongoose';
import { Sprint } from "./models/sprint.model";
import { Args, Query } from "@nestjs/graphql";
import { SprintService } from "./sprint.service";

@Resolver(of => Sprint)
export class SprintResolver {
    constructor(
        private sprintService: SprintService
    ) {}

    @Query(returns => Sprint, { name: 'sprints' })
    async getSprints() {
        return this.sprintService.findAll();
    }

    @Query(returns => Sprint, { name: 'sprint' })
    async getSprint(@Args('id', { type: () => MongooseSchema.Types.ObjectId }) id: MongooseSchema.Types.ObjectId) {
        return this.sprintService.findOne(id);
    }
}

