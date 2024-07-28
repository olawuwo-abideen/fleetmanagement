import { 
    Body,
    Controller,
    Get,
    Post,
    Query
  } from '@nestjs/common';
import { SensordataService } from './sensordata.service';
import { CreatesensorDto } from '../dto/create-sensordata.dto';
import {sensorData} from '../schemas/sensordata.schema'

@Controller('sensor-data')
export class SensordataController {

constructor(private readonly sensorService: SensordataService) {}

@Post()
async createSensorData(
  @Body()
  sensordata: CreatesensorDto,
): Promise<sensorData> {
  return this.sensorService.create(sensordata);
}

@Get()
async findAll(@Query() query: any) {
  const filter = {};
  if (query.vehicle_id) filter['vehicle_id'] = query.vehicle_id;
  if (query.sensor_type) filter['sensor_type'] = query.sensor_type;
  if (query.start_time || query.end_time) {
    filter['timestamp'] = {};
    if (query.start_time) filter['timestamp']['$gte'] = new Date(query.start_time);
    if (query.end_time) filter['timestamp']['$lte'] = new Date(query.end_time);
  }
  return this.sensorService.findAll(query);
}


}




