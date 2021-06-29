import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema() 
export class Team {
    @Prop({ required: true })
    decisorId: ObjectId;
    
    @Prop()
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
