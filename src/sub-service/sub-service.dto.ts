/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSubServiceDto {
  // @ApiProperty({ type: String, default: '', required: true })
  // @IsNotEmpty()
  id: string;

  @ApiProperty({ type: String, default: '', required: true })
  @IsNotEmpty()
  servicename: string;

  @ApiProperty({ type: String, default: '', required: true })
  @IsNotEmpty()
  subservicename: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  subservicedescription: string;
}

export class UpdateSubServiceDto {
  // @ApiProperty({ type: String, default: '', required: true })
  // @IsNotEmpty()
  id: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  servicename: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  subservicename: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  subservicedescription: string;
}
