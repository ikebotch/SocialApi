import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { SubServiceEntity } from 'src/entities/sub-service.entity';
import { Repository } from 'typeorm';
import { CreateSubServiceDto, UpdateSubServiceDto } from './sub-service.dto';
import { v4 as uuidv4 } from 'uuid';

@Controller('sub-service')
@ApiTags('sub-service')
export class SubServiceController {
  constructor(
    @InjectRepository(SubServiceEntity)
    public repository: Repository<SubServiceEntity>,
  ) {}

  @Post()
  async create(@Body() body: CreateSubServiceDto) {
    body.id = uuidv4();
    return await this.repository.insert(body);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  @Put(':id')
  update(@Body() body: UpdateSubServiceDto, @Param('id') id: string) {
    return this.repository.update({ id: id }, body);
  }

  @Get()
  getAll() {
    return this.repository.find();
  }
}
