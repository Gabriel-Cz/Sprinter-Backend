import { ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,  ObjectId } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema() 
export class Team {
    @Prop({ type: ObjectId })
    decisorId: ObjectId;
    
    @Prop(ObjectId)
    financesExpId: ObjectId;
    
    @Prop()
    customerExpId: ObjectId;

    @Prop()
    marketingExpId: ObjectId;

    @Prop({ required: true })
    techExpId: ObjectId;

    @Prop()
    designExpId: ObjectId;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
