import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(
    @InjectRepository(UserEntity)
    public repository: Repository<UserEntity>,
  ) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    console.log('body', body);
    return await this.repository.insert(body);
  }

  @Get(':username')
  getOne(@Param('username') username: string) {
    return this.repository.findOne({
      where: {
        username,
      },
    });
  }

  @Put(':username')
  update(@Body() body: UpdateUserDto, @Param('username') username: string) {
    return this.repository.update({ username: username }, body);
  }

  @Get()
  getAll() {
    return this.repository.find();
  }
}
