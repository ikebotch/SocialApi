/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String, default: '', required: true })
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ type: String, default: '', required: true })
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({ default: '', required: false })
  @IsOptional()
  primaryImage: string;

  @ApiProperty({ default: '', required: true })
  @IsOptional()
  username: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  email: string;

  @ApiProperty({ type: Boolean, default: false, required: false })
  @IsNotEmpty()
  isActive: boolean;
}

export class UpdateUserDto {
  @ApiProperty({ type: String, default: '', required: false })
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  primaryImage: string;

  // @ApiProperty({ default: '', required: true })
  // @IsOptional()
  // username: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  email: string;

  @ApiProperty({ type: Boolean, default: false, required: false })
  @IsNotEmpty()
  isActive: boolean;
}
