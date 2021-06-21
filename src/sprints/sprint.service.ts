import { Injectable } from '@nestjs/common'
import Sprint from './interfaces/sprint.interface'

@Injectable()
export class SprintService {
    private readonly sprints: Sprint[] = [];

    findAll(): Sprint[] {
        return this.sprints;
    }

    create(sprint: Sprint) {
        this.sprints.push(sprint);
    }
}