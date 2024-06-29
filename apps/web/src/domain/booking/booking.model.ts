import { User } from '../user'

import { Facility } from '../facility'

import { Payment } from '../payment'

export class Booking {
  id: string

  status: string

  bookingDate: string

  price: number

  userId: string

  user?: User

  facilityId: string

  facility?: Facility

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  payments?: Payment[]
}
