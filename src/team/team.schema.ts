import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema() 
export class Team {
    @Prop({ required: true })
    decisorId: MongooseSchema.Types.ObjectId;
    
    @Prop()
    financesExpId: MongooseSchema.Types.ObjectId;
    
    @Prop()
    customerExpId: MongooseSchema.Types.ObjectId;

    @Prop()
    marketingExpId: MongooseSchema.Types.ObjectId;

    @Prop({ required: true })
    techExpId: MongooseSchema.Types.ObjectId;

    @Prop()
    designExpId: MongooseSchema.Types.ObjectId;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
