import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  nombre: string;

  @Prop()
  apellido: string;

  @Prop()
  direccion: string;

  @Prop()
  fotoPerfil: string;

  @Prop()
  contraseña: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
