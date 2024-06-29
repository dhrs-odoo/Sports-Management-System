import { Booking } from '../booking'

import { Schedule } from '../schedule'

import { Maintenance } from '../maintenance'

export class Facility {
  id: string

  name: string

  description?: string

  price: number

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  bookings?: Booking[]

  schedules?: Schedule[]

  maintenances?: Maintenance[]
}
