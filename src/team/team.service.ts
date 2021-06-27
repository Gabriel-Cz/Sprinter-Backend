import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Team, TeamDocument } from "./team.schema";
import { CreateTeamDto } from './dto/create-team.dto';

@Injectable()
export class TeamService {
    constructor(
        @InjectModel(Team.name)
        private teamModel: Model<TeamDocument>
    ) {}

    async findOne(id: ObjectId): Promise<Team> {
        try {
            const findedTeam = this.teamModel.findById(id);
            return findedTeam;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async create(createTeam: CreateTeamDto): Promise<Team> {
        try {
            const createdSprint = new this.teamModel(createTeam);
            return createdSprint;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}