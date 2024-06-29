import { Booking } from '../booking'

export class Payment {
  id: string

  amount: number

  paymentMethod: string

  paymentDate: string

  bookingId: string

  booking?: Booking

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
