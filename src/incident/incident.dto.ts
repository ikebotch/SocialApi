/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateIncidentDto {
  // @ApiProperty({ type: String, default: '', required: true })
  @IsNotEmpty()
  id: string;

  @ApiProperty({ type: String, default: '', required: true })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ type: String, default: '', required: true })
  @IsNotEmpty()
  subservicename: string;

  @ApiProperty({ default: '', required: true })
  @IsOptional()
  primaryImage: string;
  
  @ApiProperty({ default: '', required: true })
  @IsOptional()
  Description: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  primaryVideo: string;

  @ApiProperty({ type: String, default: '', required: true })
  @IsNotEmpty()
  Location: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  eventDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  repordedOn: Date;
}

export class assignOfficerIncidentDto {
  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  username: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  assignedOfficer: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  primaryImage: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  Description: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  primaryVideo: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  Location: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  eventDate: Date;
}
export class UpdateIncidentDto {
  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  username: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  subservicename: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  primaryImage: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  Description: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  primaryVideo: string;

  @ApiProperty({ type: String, default: '', required: false })
  @IsOptional()
  Location: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  eventDate: Date;
}


export class updateOfficerIncidentDto {
  @ApiProperty({ type: String, default: '', required: true })
  @IsOptional()
  assignedOfficer: string;
}
