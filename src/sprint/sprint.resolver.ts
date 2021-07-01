import { UseGuards } from "@nestjs/common";
import { Resolver, Args, Query, Mutation, ID, ResolveField, Parent } from "@nestjs/graphql";
import { Schema as MongooseSchema } from 'mongoose';
import { CurrentUser } from "src/auth/decorators/current-user.decorator";
import { GqlAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { TeamModel } from "src/team/team.model";
import { TeamService } from "src/team/team.service";
import { UserModel } from "src/user/user.model";
import { Sprint } from "./models/sprint.model";
import { CreateSprintInput } from "./sprint.input";
import { SprintService } from "./sprint.service";

@Resolver(of => Sprint)
export class SprintResolver {
    constructor(
        private sprintService: SprintService,
        private teamService: TeamService,
    ) {}

    @Query(returns => [Sprint], { name: 'sprints' })
    @UseGuards(GqlAuthGuard)
    async getSprints(@CurrentUser() user: UserModel) {
        return this.sprintService.findAll(user._id);
    }

    @Query(returns => Sprint, { name: 'sprint' })
    @UseGuards(GqlAuthGuard)
    async getSprint(
        @CurrentUser() user: UserModel,
        @Args('_id', { type: () => ID }) _id: MongooseSchema.Types.ObjectId) {
        let sprintID = _id;
        return this.sprintService.findOne(sprintID);
    }

    @Mutation(returns => Sprint, { name: 'newSprint' })
    @UseGuards(GqlAuthGuard) 
    async createSprint(
        @CurrentUser() user: UserModel,
        @Args('createSprintData') createSprintData: CreateSprintInput) {
        return this.sprintService.create(createSprintData);
    }

    @ResolveField('getTeam', returns => TeamModel) 
    @UseGuards(GqlAuthGuard) 
    async create(
        @CurrentUser() user: UserModel,
        @Parent() sprint: Sprint) {
        const { _id } = sprint;
        return this.teamService.findOne(_id);
    } 
}

