import { IsNotEmpty, IsInt, IsDate, IsString} from 'class-validator';


export class CreatesensorDto {

  @IsString()
  @IsNotEmpty()
  readonly vehicle_id: string;

  @IsDate()
  @IsNotEmpty()
  readonly timestamp: Date;

  @IsString()
  @IsNotEmpty()
  readonly sensor_type: string;

  @IsInt()
  @IsNotEmpty()
  readonly sensor_value: string;
}