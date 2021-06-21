import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { CreateSprintDto } from './dto/create-sprint.dto';
import { SprintService } from './sprint.service';

@Controller('sprints')
export class SprintsController {
    constructor(private sprintService: SprintService) {}

    @Get()
    async findAll(): Promise<any> {
        this.sprintService.findAll();
    } 

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return 'this return a single document'
    }

    @Post('create-sprint')
    async create(@Body() createSprintDto: CreateSprintDto) {
        this.sprintService.create(createSprintDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): string {
        return 'I delete documents'
    }
}

