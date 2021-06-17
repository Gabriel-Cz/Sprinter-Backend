import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SprintDocument = Sprint & Document;

@Schema() 

export class Sprint {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop()
    image: string;
    
    @Prop()
    teamId: string;

} 

export const SprintSchema = SchemaFactory.createForClass(Sprint);