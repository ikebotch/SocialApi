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
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateRoledDto, UpdateUserDto } from './user.dto';
import { Response } from 'express';
@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(
    @InjectRepository(UserEntity)
    public repository: Repository<UserEntity>,
  ) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    return await this.repository.insert(body);
  }

  @Get('username/:username')
  getOne(@Param('username') username: string) {
    return this.repository.findOne({
      where: {
        username,
      },
    });
  }

  @Get('email/:email')
  getByEmail(@Param('email') email: string) {
    return this.repository.findOne({
      where: {
        email,
      },
    });
  }

  @Get('loading/:email')
  getByLoad(@Param('email') email: string) {
    return this.repository.findOne({
      where: {
        email,
      },
    });
  }

  @Put(':username')
  update(@Body() body: UpdateUserDto, @Param('username') username: string) {
    return this.repository.update({ username: username }, body);
  }

  @Put('role/:username')
  updateRole(
    @Body() body: UpdateRoledDto,
    @Param('username') username: string,
  ) {
    return this.repository.update({ username: username }, body);
  }

  @Get()
  getAll() {
    return this.repository.find();
  }
}
