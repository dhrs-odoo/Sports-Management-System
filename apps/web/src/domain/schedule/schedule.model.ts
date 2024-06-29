import { Facility } from '../facility'

export class Schedule {
  id: string

  startTime: string

  endTime: string

  facilityId: string

  facility?: Facility

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
