import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SprintService } from './sprint.service'
import { SprintSchema, Sprint  } from './schemas/sprint.schema';
import { SprintResolver } from './sprint.resolver';

@Module({
    imports: [MongooseModule.forFeature([{ name: Sprint.name, schema: SprintSchema, collection: "sprints" }])],
    providers: [SprintService, SprintResolver]
})

export class SprintModule {}
