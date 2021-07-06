import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, ObjectId } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema() 
export class Team {
    @Prop({ required: true, type: MongooseSchema.Types.ObjectId })
    decisorId: ObjectId;
    
    @Prop({ type: MongooseSchema.Types.ObjectId })
    financesExpId: ObjectId;
    
    @Prop({ type: MongooseSchema.Types.ObjectId })
    customerExpId: ObjectId;

    @Prop({ type: MongooseSchema.Types.ObjectId })
    marketingExpId: ObjectId;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId })
    techExpId: ObjectId;

    @Prop({ type: MongooseSchema.Types.ObjectId })
    designExpId: ObjectId;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
