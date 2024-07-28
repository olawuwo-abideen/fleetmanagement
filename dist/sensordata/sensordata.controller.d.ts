import { SensordataService } from './sensordata.service';
import { CreatesensorDto } from '../dto/create-sensordata.dto';
import { sensorData } from '../schemas/sensordata.schema';
export declare class SensordataController {
    private readonly sensorService;
    constructor(sensorService: SensordataService);
    createSensorData(sensordata: CreatesensorDto): Promise<sensorData>;
    findAll(query: any): Promise<sensorData[]>;
}
