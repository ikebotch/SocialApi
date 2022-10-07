/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'incidents' })
export class IncidentEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  subservicename: string;

  @Column({ nullable: true })
  primaryImage: string;

  @Column({ nullable: true })
  primaryVideo: string;

  @Column({ nullable: true })
  Description: string;

  @Column()
  Location: string;

  @Column({ nullable: true })
  assignedOfficer: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  eventDate: Date;

  @Column({
    type: 'date',
    nullable: false,
    default: new Date().toISOString(),
  })
  @Column()
  repordedOn: Date;
}
