import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SensordataService } from './sensordata.service';
import { SensordataController } from './sensordata.controller';
import { sensorDataSchema } from '../schemas/sensordata.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'sensorData', schema: sensorDataSchema }])],
  providers: [SensordataService],
  controllers: [SensordataController]
})
export class SensordataModule {}

