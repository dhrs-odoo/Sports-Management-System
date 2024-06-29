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

import { User } from '../../../modules/user/domain'

import { Facility } from '../../../modules/facility/domain'

import { Payment } from '../../../modules/payment/domain'

@Entity()
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  status: string

  @Column({})
  bookingDate: string

  @ColumnNumeric({ type: 'numeric' })
  price: number

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.bookings)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  facilityId: string

  @ManyToOne(() => Facility, parent => parent.bookings)
  @JoinColumn({ name: 'facilityId' })
  facility?: Facility

  @OneToMany(() => Payment, child => child.booking)
  payments?: Payment[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
