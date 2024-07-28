import { Test, TestingModule } from '@nestjs/testing';
import { SensordataController } from '../sensordata/sensordata.controller';
import { SensordataService } from '../sensordata/sensordata.service';
import { sensorData } from '../schemas/sensordata.schema';

const mockSensorData = {
  vehicle_id: 'V123',
  timestamp: new Date(),
  sensor_type: 'GPS',
  sensor_value: '12.345,67.890',
};

describe('SensorDataController', () => {
  let controller: SensordataController;
  let service: SensordataService;

  const mockSensorDataService = {
    create: jest.fn().mockResolvedValue(mockSensorData),
    findAll: jest.fn().mockResolvedValue([mockSensorData]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensordataController],
      providers: [
        {
          provide: SensordataService,
          useValue: mockSensorDataService,
        },
      ],
    }).compile();

    controller = module.get<SensordataController>(SensordataController);
    service = module.get<SensordataService>(SensordataService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new sensor data record', async () => {
    const result = await controller.createSensorData(mockSensorData as sensorData);
    expect(result).toEqual(mockSensorData);
    expect(service.create).toHaveBeenCalledWith(mockSensorData);
  });

  it('should retrieve all sensor data records', async () => {
    const result = await controller.findAll({});
    expect(result).toEqual([mockSensorData]);
    expect(service.findAll).toHaveBeenCalledWith({});
  });
});
