import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceEntity } from 'src/entities/service.entity';
import { Repository } from 'typeorm';
import { CreateServiceDto, UpdateServiceDto } from './service.dto';

@Controller('service')
@ApiTags('service')
export class ServiceController {
  constructor(
    @InjectRepository(ServiceEntity)
    public repository: Repository<ServiceEntity>,
  ) {}

  @Post()
  async create(@Body() body: CreateServiceDto) {
    return await this.repository.insert(body);
  }

  @Get(':servicename')
  getOne(@Param('servicename') servicename: string) {
    return this.repository.findOne({
      where: {
        servicename,
      },
    });
  }

  @Put(':servicename')
  update(
    @Body() body: UpdateServiceDto,
    @Param('servicename') servicename: string,
  ) {
    return this.repository.update({ servicename: servicename }, body);
  }

  @Get()
  getAll() {
    return this.repository.find();
  }
}
