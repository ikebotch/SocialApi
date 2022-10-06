/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty({ type: String, default: '', required: true })
  @IsNotEmpty()
  servicename: string;

  @ApiProperty({ type: String, default: '', required: true })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ type: String, default: '', required: true })
  @IsNotEmpty()
  primaryImage: string;
}



export class UpdateServiceDto {
  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  servicename: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  description: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  primaryImage: string;
}
