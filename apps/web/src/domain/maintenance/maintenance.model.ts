import { Facility } from '../facility'

export class Maintenance {
  id: string

  taskDescription: string

  status: string

  scheduledDate: string

  facilityId: string

  facility?: Facility

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
