/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
     PrimaryColumn,
  } from 'typeorm';

  @Entity({ name: 'services' })
  export class ServiceEntity  {
    @PrimaryColumn()
    servicename: string;
  
    @Column()
    description: string;

    @Column()
    primaryImage: string;
  }
  