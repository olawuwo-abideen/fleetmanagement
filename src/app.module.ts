import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FleetModule } from './fleet/fleet.module';

@Module({
  imports: [FleetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
