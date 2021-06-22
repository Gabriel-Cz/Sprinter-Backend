import { Model, Schema as MongooseSchema } from 'mongoose';
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Sprint, SprintDocument } from './schemas/sprint.schema';
import { CreateSprintDto, FindSprintDto } from './dto/create-sprint.dto';

@Injectable()
export class SprintService {
    constructor(@InjectModel(Sprint.name) private sprintModel: Model<SprintDocument> ) {}

    async findAll(): Promise<Sprint[]> {
        try {
            return this.sprintModel.find().exec();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async findOne(id: MongooseSchema.Types.ObjectId) {
        try {
            const sprintID = id;
            return this.sprintModel.findById(sprintID).exec();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async create(createSprint: CreateSprintDto): Promise<Sprint> {
        try {
            const createdSprint = new this.sprintModel(createSprint);
            return createdSprint.save();
        } catch(error) {
            throw new InternalServerErrorException(error); 
        }
    }

    async remove(id: MongooseSchema.Types.ObjectId) {
        try {
            const sprintID = id;
            return this.sprintModel.findByIdAndDelete(sprintID);
        } catch(error) {
            throw new InternalServerErrorException(error);
        }
    }
}