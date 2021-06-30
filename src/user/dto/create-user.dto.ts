import { Schema as MongooseSchema } from 'mongoose';

export class CreateUserDto {
    name: string;
    avatar: string;
    role?: string;
    currentSprintId?: MongooseSchema.Types.ObjectId;
    newtworkId?: MongooseSchema.Types.ObjectId;
    createdAt?: Date;
}