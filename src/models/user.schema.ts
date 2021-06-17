import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type UserDocument = User & Document;

const emailValidatorRegex = function(email: string): boolean {
    const regExp = new RegExp("^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$");
    const emailValidated = regExp.test(email);
    return emailValidated;
}
const passwordValidatorRegex = function(password: string): boolean {
    const regExp = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$");
    const passwordValidated = regExp.test(password);
    return passwordValidated;
}

@Schema()

export class User {
    @Prop({ required: true })
    name: String;

    @Prop({ required: true, unique: true, validate: emailValidatorRegex })
    email: String;

    @Prop({ required: true, unique: true, validate: passwordValidatorRegex })
    password: String;

    @Prop()
    profesionName: String;

    @Prop()
    avatar: String;

    @Prop({ unique: true })
    currentSprintId: ObjectId;

    @Prop({ unique: true })
    networkId: ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);