import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId, Document } from "mongoose";

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
    @Prop({ required: true, unique: true })
    userId: ObjectId;

    @Prop({ type: Array, max: 20, unique: true })
    network: ObjectId[];
}

export const ContactSchema = SchemaFactory.createForClass(Contact);