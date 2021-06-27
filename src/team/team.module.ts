import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from './team.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: Team.name, schema: TeamSchema, collection: 'sprints'}])],
    providers: [TeamService, TeamResolver]
})

export class TeamModule {}