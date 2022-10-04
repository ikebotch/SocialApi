/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    PrimaryColumn
    //   Index,
  } from 'typeorm';

  @Entity({ name: 'users' })
  export class UserEntity  {
    @Column()
    firstname: string;
  
    @Column()
    lastname: string;
  
    @Column({ nullable: true })
    primaryImage: string;
  
    @Column({ unique: true })
    username: string;
  
  
    @PrimaryColumn()
    email: string;

    @Column({ default: true })
    isActive: boolean;
  }
  