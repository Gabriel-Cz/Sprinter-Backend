import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, ObjectId } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema() 
export class Team {

    @Prop({ type: MongooseSchema.Types.ObjectId })
    sprint_Id: ObjectId;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId })
    decisor_Id: ObjectId;
    
    @Prop({ type: MongooseSchema.Types.ObjectId })
    financesExp_Id: ObjectId;
    
    @Prop({ type: MongooseSchema.Types.ObjectId })
    customerExp_Id: ObjectId;

    @Prop({ type: MongooseSchema.Types.ObjectId })
    marketingExp_Id: ObjectId;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId })
    techExp_Id: ObjectId;

    @Prop({ type: MongooseSchema.Types.ObjectId })
    designExp_Id: ObjectId;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
