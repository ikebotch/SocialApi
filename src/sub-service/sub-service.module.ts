import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubServiceEntity } from 'src/entities/sub-service.entity';
import { SubServiceController } from './sub-service.controller';
import { SubServiceService } from './sub-service.service';

@Module({
  controllers: [SubServiceController],
  providers: [SubServiceService],
  imports: [TypeOrmModule.forFeature([SubServiceEntity])],
})
export class SubServiceModule {}
