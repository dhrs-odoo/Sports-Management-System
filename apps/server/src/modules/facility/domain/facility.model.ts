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

import { Booking } from '../../../modules/booking/domain'

import { Schedule } from '../../../modules/schedule/domain'

import { Maintenance } from '../../../modules/maintenance/domain'

@Entity()
export class Facility {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @Column({ nullable: true })
  description?: string

  @ColumnNumeric({ type: 'numeric' })
  price: number

  @OneToMany(() => Booking, child => child.facility)
  bookings?: Booking[]

  @OneToMany(() => Schedule, child => child.facility)
  schedules?: Schedule[]

  @OneToMany(() => Maintenance, child => child.facility)
  maintenances?: Maintenance[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
