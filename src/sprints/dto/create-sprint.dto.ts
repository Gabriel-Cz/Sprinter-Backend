export class CreateSprintDto {
    id: object;
    name: string;
    description: string;
    teamId: string;
    image: string;
    createdAt: Date;
}

export class FindSprintDto {
    id: string;
}