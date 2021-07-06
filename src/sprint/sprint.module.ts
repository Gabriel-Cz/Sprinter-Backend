import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SprintService } from './sprint.service'
import { SprintSchema, Sprint  } from './schemas/sprint.schema';
import { SprintResolver } from './sprint.resolver';
import { TeamService } from '../team/team.service';
import { TeamModule } from 'src/team/team.module';

@Module({
    imports: [MongooseModule.forFeature([{ name: Sprint.name, schema: SprintSchema, collection: "sprints" }])],
    providers: [
        SprintService, 
        SprintResolver
    ]
})

export class SprintModule {}
