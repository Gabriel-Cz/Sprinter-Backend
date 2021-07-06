import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, ObjectId } from 'mongoose';

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

const emailValidator = [emailValidatorRegex, "Debes colocar un correo electronico valido"];
const passwordValidator = [passwordValidatorRegex, "Tu contraseña debe de tener al menos 8 caracteres y una Mayuscula"];

@Schema()

export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: [true, 'El correo electronico es necesario'], unique: true /* validate: [emailValidatorRegex, 'Debes colocar un correo electronico valido'] */})
    email: string;

    @Prop({ required: [true, 'La contrasena es necesaria'] /* validate: [passwordValidatorRegex, 'Tu contraseña debe de tener al menos 8 caracteres y una Mayuscula'] */ })
    password: string;

    @Prop()
    role?: string;

    @Prop()
    avatar?: string;

    /* @Prop({ type: MongooseSchema.Types.ObjectId })
    currentSprintId?: ObjectId; */

    @Prop({ type: Array, unique: true, max: [20, 'Alcanzaste el maximo de contactos disponibles para agregar en tu perfil.'] })
    contactsNetwork?: ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);