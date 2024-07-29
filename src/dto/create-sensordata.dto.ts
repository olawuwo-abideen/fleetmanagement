import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, IsDate, IsString} from 'class-validator';


export class CreatesensorDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly vehicle_id: string;
  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  readonly timestamp: Date;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly sensor_type: string;
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  readonly sensor_value: string;
}