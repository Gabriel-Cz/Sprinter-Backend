import { Resolver, Args, Query, Mutation, ID } from '@nestjs/graphql'
import { ObjectId } from 'mongoose';
import { TeamModel } from './team.model';
import { TeamService } from "./team.service";
import { CreateTeamInput } from './team.input';

@Resolver(of => TeamModel)
export class TeamResolver {
    constructor(
        private teamService: TeamService
    ) {}

    @Query(returns => TeamModel, { name: 'teams' })
    async getTeam(@Args('_id', { type: () => ID }) _id: ObjectId) {
        let teamID = _id;
        return this.teamService.findOne(teamID);
    }

    @Mutation(returns => TeamModel, { name: 'newTeam' })
    async createTeam(@Args('createTeamData') createTeamData: CreateTeamInput) {
        return this.teamService.create(createTeamData);
    }
}