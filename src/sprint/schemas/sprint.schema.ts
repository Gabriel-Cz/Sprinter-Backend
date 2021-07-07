import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, ObjectId } from 'mongoose';
import { Team } from 'src/team/team.schema';

export type SprintDocument = Sprint & Document;

@Schema() 
export class Sprint {
    @Prop({ type: MongooseSchema.Types.ObjectId })
    user_Id: ObjectId;

    @Prop({ type: MongooseSchema.Types.ObjectId })
    team_Id: ObjectId;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop()
    image: string;

    @Prop({ default: Date.now })
    createdAt: Date;
} 

export const SprintSchema = SchemaFactory.createForClass(Sprint);