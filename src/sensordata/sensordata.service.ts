import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { sensorData } from '../schemas/sensordata.schema';


@Injectable()
export class SensordataService {
  constructor(
    @InjectModel(sensorData.name)
    private sensorDataModel: mongoose.Model<sensorData>,
  ) {}

  async create(sensordata: sensorData): Promise<sensorData> {
    try {
      const res = await this.sensorDataModel.create(sensordata);
      return res;
    } catch (error) {
      throw new BadRequestException('Failed to create sensor data.', error.message);
    }
  }

  async findAll(query: any): Promise<sensorData[]> {
    const data = await this.sensorDataModel.find(query).exec();
    if (data.length === 0) {
      throw new NotFoundException('No sensor data found for the given query.');
    }
    return data;
  }

}



