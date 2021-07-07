import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, ObjectId } from 'mongoose';

export type ContactsNetworkDocument = ContactsNetwork & Document
export type UserDocument = User & Document;

/* const emailValidatorRegex = function(email: string): boolean {
    const regExp = new RegExp("^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$");
    const emailValidated = regExp.test(email);
    return emailValidated;
}
const passwordValidatorRegex = function(password: string): boolean {
    const regExp = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$");
    const passwordValidated = regExp.test(password);
    return passwordValidated;
} */

@Schema()
export class ContactsNetwork {
    @Prop({ type: MongooseSchema.Types.ObjectId })
    contact_Id?: ObjectId;

    @Prop()
    contactName?: string;
}

export const ContactsNetworkSchema = SchemaFactory.createForClass(ContactsNetwork);

@Schema()
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ 
        required: [true, 'El correo electronico es necesario'], 
        unique: [true, 'El correo electronico ya existe prueba de nuevo'] 
        /* validate: [emailValidatorRegex, 'Debes colocar un correo electronico valido'] */
    })
    email: string;

    @Prop({ 
        required: [true, 'La contrasena es necesaria'] 
        /* validate: [passwordValidatorRegex, 'Tu contraseña debe de tener al menos 8 caracteres y una Mayuscula'] */ 
    })
    password: string;

    @Prop()
    role?: string;

    @Prop()
    avatar?: string;

    @Prop({ type: MongooseSchema.Types.ObjectId })
    currentSprint?: ObjectId;

    @Prop({ 
        type: [ContactsNetworkSchema], 
        default: [], 
        max: [20, 'Alcanzaste el maximo de contactos disponibles para agregar en tu perfil.'] 
    })
    contactsNetwork?: ContactsNetworkDocument[];
}

export const UserSchema = SchemaFactory.createForClass(User);