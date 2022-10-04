import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidentEntity } from 'src/entities/incident.entity';
import { IncidentController } from './incident.controller';
import { IncidentService } from './incident.service';

@Module({
  controllers: [IncidentController],
  providers: [IncidentService],
  imports: [TypeOrmModule.forFeature([IncidentEntity])],
})
export class IncidentModule {}
