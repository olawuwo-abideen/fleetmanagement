import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {now} from "mongoose";
import { ApiProperty } from '@nestjs/swagger';


@Schema({
  timestamps: false,
   versionKey: false 
})
export class sensorData {
  @ApiProperty()
  @Prop()
  vehicle_id: string;

  @ApiProperty()
  @Prop(({default: now()}))
  timestamp: Date

  @ApiProperty()
  @Prop(({ required: true, enum: ['GPS', 'Fuel Level', 'Speed'] }))
  sensor_type: string;

  @ApiProperty()
  @Prop()
  sensor_value: string;
}

export const sensorDataSchema = SchemaFactory.createForClass(sensorData);
