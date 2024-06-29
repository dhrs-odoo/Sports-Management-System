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
export class Maintenance {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  taskDescription: string

  @Column({})
  status: string

  @Column({})
  scheduledDate: string

  @Column({})
  facilityId: string

  @ManyToOne(() => Facility, parent => parent.maintenances)
  @JoinColumn({ name: 'facilityId' })
  facility?: Facility

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
