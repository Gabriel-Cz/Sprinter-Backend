import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SprintsController } from './sprint.controller'
import { SprintService } from './sprint.service'
import { SprintSchema, Sprint  } from './schemas/sprint.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Sprint.name, schema: SprintSchema }])],
    controllers: [SprintsController],
    providers: [SprintService]
})

export class SprintModule {}
