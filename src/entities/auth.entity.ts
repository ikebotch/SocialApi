/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    PrimaryColumn
  } from 'typeorm';

  @Entity({ name: 'auth' })
  export class AuthEntity  {
    @Column()
    firstname: string;
  
    @Column()
    lastname: string;
  
    @Column({ nullable: true })
    primaryImage: string;
  
    @PrimaryColumn()
    username: string;
  
  
    @Column({ unique: true })
    email: string;

    @Column({ default: true })
    isActive: boolean;
  }
  