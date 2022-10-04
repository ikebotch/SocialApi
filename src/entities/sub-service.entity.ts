/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,PrimaryColumn
} from 'typeorm';

@Entity({ name: 'subservices' })
export class SubServiceEntity {

  @PrimaryColumn()
  id: string;


  @Column()
  servicename: string;

  @Column()
  subservicename: string;

  @Column()
  subservicedescription: string;
}
