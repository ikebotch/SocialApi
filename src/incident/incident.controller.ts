import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { IncidentEntity } from 'src/entities/incident.entity';
import { Repository } from 'typeorm';
import { CreateIncidentDto, UpdateIncidentDto } from './incident.dto';
import { v4 as uuidv4 } from 'uuid';
import { Response } from 'express';

@Controller('incident')
@ApiTags('incident')
export class IncidentController {
  constructor(
    @InjectRepository(IncidentEntity)
    public repository: Repository<IncidentEntity>,
  ) {}

  @Post()
  async create(@Body() body: CreateIncidentDto) {
    body.id = uuidv4();
    return await this.repository.insert(body);
  }

  @Get('username/:username')
  getOne(@Param('username') username: string, @Res() res: Response) {
    const a = this.repository.find({
      where: {
        username,
      },
    });
    res.status(HttpStatus.OK).json(a);
  }

  @Get('subservice/:subservicename')
  getServiceName(@Param('subservicename') subservicename: string) {
    return this.repository.find({
      where: {
        subservicename,
      },
    });
  }

  @Put(':id')
  update(@Body() body: UpdateIncidentDto, @Param('id') id: string) {
    return this.repository.update({ id: id }, body);
  }

  @Get()
  getAll() {
    return this.repository.find();
  }
}
