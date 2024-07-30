import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { SensordataService } from '../sensordata/sensordata.service';
import { sensorData } from '../schemas/sensordata.schema';
import { Model } from 'mongoose';

const mockSensorData = {
  vehicle_id: 'V123',
  timestamp: new Date(),
  sensor_type: 'GPS',
  sensor_value: '12.345,67.890',
};

describe('SensorDataService', () => {
  let service: SensordataService;
  let model: Model<sensorData>;

  const mockSensorDataModel = {
    create: jest.fn().mockResolvedValue(mockSensorData),
    find: jest.fn(),
    exec: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SensordataService,
        {
          provide: getModelToken(sensorData.name),
          useValue: mockSensorDataModel,
        },
      ],
    }).compile();

    service = module.get<SensordataService>(SensordataService);
    model = module.get<Model<sensorData>>(getModelToken(sensorData.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new sensor data record', async () => {
    const result = await service.create(mockSensorData as sensorData);
    expect(result).toEqual(mockSensorData);
    expect(model.create).toHaveBeenCalledWith(mockSensorData);
  });

  it('should retrieve all sensor data records', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce([mockSensorData]),
    } as any);

    const result = await service.findAll({});
    expect(result).toEqual([mockSensorData]);
  });
});
