import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { Schema as MongooseSchema } from 'mongoose'
import { CreateSprintDto } from './dto/create-sprint.dto';
import { SprintService } from './sprint.service';

@Controller('sprints')
export class SprintsController {
    constructor(private sprintService: SprintService) {}

    @Get()
    async findAll(): Promise<any> {
        return this.sprintService.findAll();
    } 

    @Get('/sprint/:id')
    async findOne(@Param('id') id: MongooseSchema.Types.ObjectId) {
        return this.sprintService.findOne(id);
    }

    @Post('/create-sprint')
    async create(@Body() createSprintDto: CreateSprintDto)  {
        return this.sprintService.create(createSprintDto);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }

    @Delete('/sprint/:id')
    async remove(@Param('id') id: MongooseSchema.Types.ObjectId) {
        return this.sprintService.remove(id);
    }
}

