import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Team, TeamDocument } from "./team.schema";
import { CreateTeamDto } from './dto/create-team.dto';
import { CreateTeamInput } from "./team.input";

@Injectable()
export class TeamService {
    constructor(
        @InjectModel(Team.name)
        private teamModel: Model<TeamDocument>
    ) {}

    async create(createTeam: CreateTeamInput): Promise<Team> {
        try {
            const createdSprint = new this.teamModel(createTeam);
            return createdSprint.save();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async findOne(_id: ObjectId): Promise<Team> {
        try {
            const findedTeam = this.teamModel.findById(_id);
            return findedTeam.exec();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async delete(_id: ObjectId): Promise<Team> {
        try {
            const teamID = _id;
            return this.teamModel.findOneAndDelete(teamID).exec();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

}