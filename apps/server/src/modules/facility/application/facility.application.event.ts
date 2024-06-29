export namespace FacilityApplicationEvent {
  export namespace FacilityCreated {
    export const key = 'facility.application.facility.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
