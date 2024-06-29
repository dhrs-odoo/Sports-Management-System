import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Facility } from '../../../modules/facility/domain'

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  startTime: string

  @Column({})
  endTime: string

  @Column({})
  facilityId: string

  @ManyToOne(() => Facility, parent => parent.schedules)
  @JoinColumn({ name: 'facilityId' })
  facility?: Facility

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
